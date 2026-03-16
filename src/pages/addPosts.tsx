import { supabase } from "@/lib/supabase";
import { styled } from "@/styles/stitches.config";
import { GetServerSideProps } from "next";
import { useState } from "react";
import api from "@/utils/api";
import { sanitizeSimpleHtml } from "@/utils/sanitizeSimpleHtml";

type PostRow = {
  id: number;
  title: string;
  html: string;
  created_at: string;
};

type Data = {
  id: number | "";
  title: string;
  html: string;
};

const initialData: Data = {
  id: "",
  title: "",
  html: "",
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const allowed = query.s === process.env.ADMIN_KEY;
  if (!allowed) {
    return {
      props: {
        allowed,
        posts: [],
      },
    };
  }

  const { data } = await supabase.from("posts").select("id,title,html,created_at").order("id", { ascending: false });

  return {
    props: {
      allowed,
      posts: data || [],
    },
  };
};

const Page = styled("div", {
  maxWidth: "900px",
  margin: "20px auto",
  padding: "20px",
  color: "$white",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const Title = styled("h1", {
  margin: 0,
  fontSize: "24px",
  fontWeight: 700,
});

const FieldRow = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

const Label = styled("label", {
  fontSize: "14px",
  color: "rgba(255,255,255,0.85)",
});

const TextInput = styled("input", {
  border: "1px solid rgba(255,255,255,0.35)",
  backgroundColor: "#111",
  color: "$white",
  borderRadius: "6px",
  padding: "10px 12px",
  fontSize: "14px",
});

const HtmlInput = styled("textarea", {
  border: "1px solid rgba(255,255,255,0.35)",
  backgroundColor: "#111",
  color: "$white",
  borderRadius: "6px",
  minHeight: "240px",
  padding: "12px",
  fontSize: "14px",
  lineHeight: 1.5,
  resize: "vertical",
});

const ActionsRow = styled("div", {
  display: "flex",
  gap: "8px",
});

const ActionButton = styled("button", {
  border: "1px solid rgba(255,255,255,0.45)",
  backgroundColor: "#111",
  color: "$white",
  borderRadius: "6px",
  padding: "8px 12px",
  fontSize: "13px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#1a1a1a",
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

const Table = styled("table", {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "8px",
  "& th, & td": {
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "10px",
    textAlign: "left",
    fontSize: "14px",
  },
  "& th": {
    color: "$white",
    fontWeight: 700,
  },
});

const CellActions = styled("div", {
  display: "flex",
  gap: "8px",
});

const AddPosts = ({ allowed, posts: initialPosts }: { allowed: boolean; posts: PostRow[] }) => {
  const [data, setData] = useState<Data>(initialData);
  const [posts, setPosts] = useState<PostRow[]>(initialPosts || []);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  if (!allowed) return null;

  const disableSave = !(data.title.trim() && data.html.trim());

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.preventDefault();
    setData((old) => ({ ...old, [e.target.name]: e.target.value }));
  }

  async function fetchPosts() {
    const response = await api<PostRow[]>(`${process.env.NEXT_PUBLIC_APP_URL}/api/data/posts?select=id,title,html,created_at`, {
      method: "GET",
    });
    setPosts(response.sort((a, b) => b.id - a.id));
  }

  async function submitData() {
    setSaving(true);
    try {
      const sanitizedHtml = sanitizeSimpleHtml(data.html.trim());
      if (!sanitizedHtml) {
        alert("No valid HTML content after sanitization.");
        return;
      }

      const payload = {
        title: data.title.trim(),
        html: sanitizedHtml,
      };

      if (data.id) {
        await api(`${process.env.NEXT_PUBLIC_APP_URL}/api/data/posts`, {
          method: "PUT",
          body: JSON.stringify({ id: data.id, data: payload }),
        });
      } else {
        await api(`${process.env.NEXT_PUBLIC_APP_URL}/api/data/posts`, {
          method: "POST",
          body: JSON.stringify({ data: payload }),
        });
      }

      alert("Post salvo com sucesso!");
      setData(initialData);
      await fetchPosts();
    } catch (error: unknown) {
      alert(`${error}`);
    } finally {
      setSaving(false);
    }
  }

  function editPost(post: PostRow) {
    setData({
      id: post.id,
      title: post.title,
      html: post.html,
    });
  }

  async function deletePost(postId: number) {
    if (!confirm(`Delete post #${postId}?`)) return;
    setDeletingId(postId);
    try {
      await api(`${process.env.NEXT_PUBLIC_APP_URL}/api/data/posts`, {
        method: "DELETE",
        body: JSON.stringify({ id: postId }),
      });
      if (data.id === postId) {
        setData(initialData);
      }
      await fetchPosts();
    } catch (error: unknown) {
      alert(`${error}`);
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <Page>
      <Title>Posts Admin</Title>

      <FieldRow>
        <Label htmlFor="post-id">ID</Label>
        <TextInput id="post-id" type="text" name="id" value={data.id} disabled />
      </FieldRow>

      <FieldRow>
        <Label htmlFor="post-title">Title</Label>
        <TextInput id="post-title" type="text" name="title" value={data.title} onChange={handleChange} />
      </FieldRow>

      <FieldRow>
        <Label htmlFor="post-html">HTML</Label>
        <HtmlInput id="post-html" name="html" value={data.html} onChange={handleChange} />
      </FieldRow>

      <ActionsRow>
        <ActionButton onClick={() => setData(initialData)}>New</ActionButton>
        <ActionButton disabled={disableSave || saving} onClick={submitData}>
          {data.id ? "Update" : "Save"}
        </ActionButton>
      </ActionsRow>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>
                <CellActions>
                  <ActionButton onClick={() => editPost(post)}>Edit</ActionButton>
                  <ActionButton disabled={deletingId === post.id} onClick={() => deletePost(post.id)}>
                    {deletingId === post.id ? "Deleting..." : "Delete"}
                  </ActionButton>
                </CellActions>
              </td>
            </tr>
          ))}
          {!posts.length && (
            <tr>
              <td colSpan={3}>No posts found.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Page>
  );
};

export default AddPosts;
