const data: Record<string, number[]> = {
  "2025-04-08": [57, 43, 39, 31, 41, 44, 58, 47, 18, 40],
  "2025-04-09": [20, 27, 54, 43, 51, 30, 37, 45, 40, 29],
  "2025-04-10": [58, 32, 18, 46, 39, 21, 22, 27, 37, 52],
  "2025-04-11": [34, 36, 20, 38, 45, 39, 33, 35, 51, 30],
  "2025-04-12": [22, 41, 28, 36, 26, 44, 40, 57, 47, 51],
  "2025-04-13": [27, 29, 52, 36, 30, 44, 37, 34, 19, 53],
  "2025-04-14": [30, 24, 48],
  "2025-04-15": [40, 51, 24],
  "2025-04-16": [33, 31, 19, 57, 26, 52, 27, 24, 53, 18],
  "2025-04-17": [53, 43, 45, 51, 36, 40, 47, 23, 54, 21],
  "2025-04-18": [49, 42, 26, 30, 45, 57, 56, 52, 39, 18],
  "2025-04-19": [52, 30, 26, 37, 58, 57, 47, 19, 44, 27],
  "2025-04-20": [48, 35, 47, 44, 58, 33, 27, 50, 22, 53],
  "2025-04-21": [29, 38, 23, 41, 54, 45, 21, 31, 20, 36],
  "2025-04-22": [29, 38, 56, 35, 24, 50, 26, 30, 54, 20],
  "2025-04-23": [45, 19, 37, 50, 46, 30, 34, 21, 56, 20],
  "2025-04-24": [38, 26, 34, 37, 20, 31, 53, 46, 32, 22],
  "2025-04-25": [56, 42, 39, 45, 20, 40, 25, 26, 37, 27],
  "2025-04-26": [47, 31, 36, 51, 35, 39, 37, 40, 19, 32],
  "2025-04-27": [41, 27, 44, 34, 51, 58, 49, 47, 23, 21],
  "2025-04-28": [35, 45, 40, 43, 19, 34, 22, 51, 55, 54],
  "2025-04-29": [48, 29, 25, 53, 46, 26, 45, 37, 27, 42],
  "2025-04-30": [55, 45, 43, 22, 41, 36, 54, 42, 52, 47],
  "2025-05-01": [19, 29, 43, 28, 40, 20, 54, 39, 30, 32],
  "2025-05-02": [33, 21, 46, 55, 53, 47, 28, 20, 39, 42],
  "2025-05-03": [47, 57, 58, 33, 52, 54, 28, 42, 23, 50],
  "2025-05-04": [34, 55, 28, 51, 29, 52, 53, 42, 35, 41],
  "2025-05-05": [39, 22, 49, 20, 33, 31, 47, 44, 50, 57],
  "2025-05-06": [23, 44, 40, 25, 50, 28, 31, 39, 58, 19],
  "2025-05-07": [22, 45, 54, 47, 57, 43, 46, 38, 36, 33],
  "2025-05-08": [24, 40, 30, 56, 58, 48, 18, 27, 35, 45],
  "2025-05-09": [37, 49, 51, 47, 28, 52, 35, 45, 30, 38],
  "2025-05-10": [27, 29, 57, 54, 36, 37, 18, 42, 44, 39],
  "2025-05-11": [54, 50, 22, 44, 42, 36, 18, 39, 56, 26],
  "2025-05-12": [39, 28, 57, 45, 38, 26, 42, 49, 22, 53],
  "2025-05-13": [38, 41, 40, 53, 24, 32, 58, 44, 55, 33],
  "2025-05-14": [47, 18, 30, 58, 49, 39, 57, 26, 45, 22],
  "2025-05-15": [57, 42, 50, 25, 56, 39, 30, 46, 20, 21],
  "2025-05-16": [48, 47, 53, 39, 23, 32, 36, 29, 54, 22],
  "2025-05-17": [47, 40, 55, 44, 28, 26, 34, 25, 52, 45],
  "2025-05-18": [21, 47, 38, 54, 28, 49, 30, 43, 34, 56],
  "2025-05-19": [58, 23, 35, 41, 34, 43, 33, 53, 50, 21],
  "2025-05-20": [37, 18, 56, 42, 53, 28, 41, 29, 19, 36],
  "2025-05-21": [42, 48, 18, 50, 30, 54, 37, 21, 39, 58],
  "2025-05-22": [28, 25, 18, 41, 33, 39, 49, 44, 47, 26],
  "2025-05-23": [58, 27, 49, 36, 30, 31, 51, 32, 28, 23],
  "2025-05-24": [48, 23, 37, 30, 53, 24, 29, 50, 56, 51],
  "2025-05-25": [24, 22, 48, 49, 19, 42, 52, 50, 39, 40],
  "2025-05-26": [51, 50, 22, 47, 30, 29, 41, 49, 43, 46],
  "2025-05-27": [39, 22, 27, 21, 54, 41, 44, 30, 20, 35],
  "2025-05-28": [35, 51, 33, 41, 31, 21, 42, 24, 25, 27],
  "2025-05-29": [38, 18, 33, 42, 51, 53, 19, 26, 35, 31],
  "2025-05-30": [58, 21, 50, 32, 38, 44, 45, 51, 18, 40],
  "2025-05-31": [41, 23, 54, 22, 50, 32, 28, 47, 36, 51],
  "2025-06-01": [33, 41, 43, 37, 21, 35, 52, 27, 47, 53],
  "2025-06-02": [56, 38, 30, 58, 54, 23, 52, 33, 26, 25],
  "2025-06-03": [54, 20, 21, 43, 29, 22, 57, 56, 23, 28],
  "2025-06-04": [44, 50, 33, 28, 51, 39, 41, 56, 48, 25],
  "2025-06-05": [26, 38, 36, 40, 22, 54, 43, 55, 37, 48],
  "2025-06-06": [20, 32, 33, 27, 49, 57, 28, 58, 44, 23],
  "2025-06-07": [47, 54, 50, 29, 57, 19, 46, 25, 32, 23],
  "2025-06-08": [57, 18, 46, 27, 21, 39, 25, 24, 44, 32],
  "2025-06-09": [57, 55, 58, 20, 26, 25, 48, 30, 21, 53],
  "2025-06-10": [29, 27, 28, 18, 40, 37, 22, 26, 47, 53],
  "2025-06-11": [28, 34, 53, 58, 44, 57, 30, 38, 31, 26],
  "2025-06-12": [20, 40, 39, 55, 24, 26, 57, 58, 31, 25],
  "2025-06-13": [34, 26, 36, 28, 25, 32, 56, 53, 47, 21],
  "2025-06-14": [37, 38, 34, 24, 57, 30, 46, 56, 48, 28],
  "2025-06-15": [50, 42, 49, 57, 20, 52, 22, 47, 37, 41],
  "2025-06-16": [56, 39, 55, 51, 45, 23, 32, 24, 22, 57],
  "2025-06-17": [21, 25, 41, 24, 33, 35, 29, 47, 26, 58],
  "2025-06-18": [56, 24, 25, 20, 37, 23, 47, 51, 58, 19],
  "2025-06-19": [24, 36, 46, 34, 26, 38, 56, 19, 53, 42],
  "2025-06-20": [34, 41, 36, 35, 38, 33, 29, 23, 53, 25],
  "2025-06-21": [27, 24, 57, 35, 55, 30, 33, 44, 58, 38],
  "2025-06-22": [44, 23, 20, 40, 39, 43, 36, 27, 21, 51],
  "2025-06-23": [53, 37, 19, 24, 51, 27, 18, 34, 38, 58],
  "2025-06-24": [49, 18, 26, 29, 36, 52, 48, 22, 20, 54],
  "2025-06-25": [32, 36, 48, 22, 27, 55, 44, 33, 25, 47],
  "2025-06-26": [24, 44, 29, 41, 31, 58, 51, 25, 54, 42],
  "2025-06-27": [21, 55, 35, 42, 52, 47, 38, 54, 40, 36],
  "2025-06-28": [53, 29, 30, 54, 31, 48, 52, 55, 37, 33],
  "2025-06-29": [50, 28, 33, 23, 40, 36, 46, 19, 18, 39],
  "2025-06-30": [30, 32, 48, 36, 56, 18, 57, 55, 20, 24],
  "2025-07-01": [28, 36, 48, 27, 20, 51, 23, 50, 25, 46],
  "2025-07-02": [38, 40, 46, 58, 28, 55, 49, 32, 39, 57],
  "2025-07-03": [28, 34, 36, 42, 40, 39, 20, 50, 57, 38],
  "2025-07-04": [35, 22, 48, 30, 41, 27, 37, 38, 39, 47],
  "2025-07-05": [57, 42, 58, 25, 28, 22, 55, 43, 46, 38],
  "2025-07-06": [54, 55, 18, 29, 46, 28, 20, 34, 23, 32],
  "2025-07-07": [23, 42, 32, 18, 30, 38, 54, 19, 39, 55],
  "2025-07-08": [37, 28, 36, 57, 54, 51, 20, 31, 42, 19],
  "2025-07-09": [18, 50, 19, 34, 20, 55, 30, 38, 51, 28],
  "2025-07-10": [52, 40, 46, 55, 24, 26, 31, 30, 28, 38],
  "2025-07-11": [23, 56, 34, 51, 46, 42, 20, 28, 22, 27],
  "2025-07-12": [46, 18, 23, 54, 22, 36, 31, 43, 24, 26],
  "2025-07-13": [21, 36, 34, 28, 58, 48, 51, 55, 33, 45],
  "2025-07-14": [44, 32, 51, 56, 53, 29, 30, 35, 54, 50],
  "2025-07-15": [19, 30, 50, 38, 58, 35, 22, 21, 32, 20],
  "2025-07-16": [43, 49, 53, 44, 46, 36, 28, 54, 22, 35],
  "2025-07-17": [46, 51, 45, 19, 57, 39, 50, 32, 55, 29],
  "2025-07-18": [47, 44, 20, 48, 43, 55, 38, 52, 33, 45],
  "2025-07-19": [42, 25, 37, 43, 46, 49, 35, 44, 22, 47],
  "2025-07-20": [42, 52, 51, 57, 38, 53, 41, 46, 47, 34],
  "2025-07-21": [31, 54, 46, 52, 28, 44, 39, 56, 35, 29],
  "2025-07-22": [24, 31, 39, 36, 26, 37, 42, 27, 33, 58],
  "2025-07-23": [47, 23, 39, 20, 42, 31, 48, 46, 22, 33],
  "2025-07-24": [37, 45, 56, 44, 55, 30, 20, 53, 38, 32],
  "2025-07-25": [18, 52, 49, 44, 21, 32, 56, 46, 39, 30],
  "2025-07-26": [31, 23, 27, 55, 44, 39, 49, 47, 30, 28],
  "2025-07-27": [44, 19, 30, 24, 22, 35, 34, 52, 46, 21],
  "2025-07-28": [39, 22, 51, 55, 36, 20, 29, 30, 56, 58],
  "2025-07-29": [40, 32, 53, 55, 33, 49, 57, 31, 42, 50],
  "2025-07-30": [34, 31, 26, 58, 35, 42, 27, 19, 23, 36],
  "2025-07-31": [30, 29, 46, 49, 28, 34, 36, 40, 44, 38],
  "2025-08-01": [50, 20, 53, 38, 51, 32, 26, 22, 56, 25],
  "2025-08-02": [40, 45, 38, 57, 39, 23, 52, 18, 31, 29],
  "2025-08-03": [50, 49, 57, 39, 40, 51, 48, 19, 23, 26],
  "2025-08-04": [23, 30, 50, 44, 43, 42, 53, 32, 35, 25],
  "2025-08-05": [23, 34, 29, 58, 47, 45, 35, 32, 53, 30],
  "2025-08-06": [35, 52, 27, 28, 48, 44, 31, 20, 42, 53],
  "2025-08-07": [28, 29, 26, 41, 47, 18, 40, 39, 57, 48],
  "2025-08-08": [36, 20, 34, 37, 28, 38, 24, 44, 47, 27],
  "2025-08-09": [46, 28, 25, 32, 51, 37, 30, 48, 53, 31],
  "2025-08-10": [51, 34, 44, 49, 20, 42, 30, 32, 31, 29],
  "2025-08-11": [45, 48, 51, 20, 58, 21, 26, 41, 57, 36],
  "2025-08-12": [45, 32, 41, 31, 33, 40, 26, 56, 36, 19],
  "2025-08-13": [30, 49, 25, 36, 54, 21, 20, 27, 53, 44],
  "2025-08-14": [20, 18, 57, 32, 37, 40, 48, 25, 33, 28],
  "2025-08-15": [57, 44, 43, 50, 58, 18, 53, 21, 51, 27],
  "2025-08-16": [32, 47, 21, 39, 27, 46, 23, 19, 37, 20],
  "2025-08-17": [22, 21, 36, 53, 38, 24, 33, 20, 34, 51],
  "2025-08-18": [47, 23, 43, 55, 49, 28, 41, 29, 51, 56],
  "2025-08-19": [43, 20, 34, 47, 30, 27, 36, 39, 25, 31],
  "2025-08-20": [52, 39, 54, 34, 27, 21, 45, 56, 31, 19],
  "2025-08-21": [33, 36, 38, 44, 55, 18, 53, 58, 49, 24],
  "2025-08-22": [44, 28, 52, 30, 50, 54, 56, 18, 24, 39],
  "2025-08-23": [36, 57, 25, 31, 42, 21, 56, 33, 51, 34],
  "2025-08-24": [50, 45, 20, 32, 28, 56, 58, 31, 33, 40],
  "2025-08-25": [57, 37, 58, 41, 36, 48, 44, 30, 23, 18],
  "2025-08-26": [21, 52, 45, 28, 25, 34, 57, 46, 38, 36],
  "2025-08-27": [40, 47, 31, 53, 54, 51, 25, 48, 44, 57],
  "2025-08-28": [38, 25, 39, 27, 51, 44, 58, 47, 41, 46],
  "2025-08-29": [41, 47, 51, 35, 22, 57, 44, 34, 54, 50],
  "2025-08-30": [39, 49, 36, 44, 32, 51, 43, 28, 21, 34],
  "2025-08-31": [44, 31, 26, 41, 40, 32, 56, 27, 23, 42],
  "2025-09-01": [47, 25, 26, 20, 41, 33, 35, 49, 21, 18],
  "2025-09-02": [21, 42, 53, 40, 45, 50, 34, 51, 48, 31],
  "2025-09-03": [55, 25, 22, 45, 39, 24, 29, 27, 26, 47],
  "2025-09-04": [32, 53, 51, 30, 26, 48, 27, 57, 44, 39],
  "2025-09-05": [41, 46, 49, 42, 33, 35, 28, 45, 22, 23],
  "2025-09-06": [36, 38, 26, 34, 49, 30, 35, 41, 32, 54],
  "2025-09-07": [41, 39, 52, 58, 42, 30, 38, 43, 18, 32],
  "2025-09-08": [36, 48, 56, 47, 37, 40, 57, 46, 31, 29],
  "2025-09-09": [47, 30, 38, 46, 51, 34, 41, 54, 40, 36],
  "2025-09-10": [33, 26, 43, 36, 23, 55, 41, 29, 45, 57],
  "2025-09-11": [25, 34, 40, 24, 57, 54, 29, 55, 56, 36],
  "2025-09-12": [20, 53, 23, 49, 34, 40, 47, 55, 33, 26],
  "2025-09-13": [20, 44, 18, 51, 37, 28, 34, 26, 43, 53],
  "2025-09-14": [38, 42, 18, 30, 23, 35, 49, 31, 33, 40],
  "2025-09-15": [33, 31, 21, 37, 43, 45, 30, 50, 29, 48],
  "2025-09-16": [26, 19, 33, 46, 48, 52, 30, 24, 28, 42],
  "2025-09-17": [20, 33, 50, 18, 22, 42, 52, 55, 21, 40],
  "2025-09-18": [50, 30, 55, 53, 37, 20, 35, 43, 56, 24],
  "2025-09-19": [50, 32, 42, 35, 20, 27, 28, 21, 24, 43],
  "2025-09-20": [52, 27, 47, 54, 38, 26, 44, 18, 37, 49],
  "2025-09-21": [28, 56, 27, 21, 42, 49, 32, 41, 53, 55],
  "2025-09-22": [22, 18, 24, 20, 41, 58, 43, 51, 30, 21],
  "2025-09-23": [18, 33, 39, 36, 51, 43, 23, 25, 45, 50],
  "2025-09-24": [41, 29, 30, 50, 54, 25, 55, 40, 51, 21],
  "2025-09-25": [41, 22, 27, 47, 21, 39, 24, 43, 53, 52],
  "2025-09-26": [49, 38, 33, 41, 20, 52, 45, 35, 32, 54],
  "2025-09-27": [58, 44, 27, 48, 32, 20, 43, 33, 35, 31],
  "2025-09-28": [26, 22, 38, 42, 33, 45, 53, 21, 56, 20],
  "2025-09-29": [36, 28, 26, 54, 35, 47, 24, 42, 50, 48],
  "2025-09-30": [27, 46, 37, 25, 47, 49, 33, 28, 43, 23],
  "2025-10-01": [43, 46, 29, 21, 53, 57, 44, 45, 52, 33],
  "2025-10-02": [18, 19, 25, 22, 52, 28, 56, 46, 42, 33],
  "2025-10-03": [31, 28, 44, 23, 51, 41, 33, 24, 40, 27],
  "2025-10-04": [26, 22, 38, 58, 57, 34, 20, 50, 44, 46],
  "2025-10-05": [42, 20, 49, 28, 52, 34, 30, 44, 45, 31],
  "2025-10-06": [27, 36, 49, 45, 34, 52, 30, 40, 20, 38],
  "2025-10-07": [35, 33, 43, 44, 49, 36, 22, 28, 47, 52],
  "2025-10-08": [30, 23, 36, 18, 51, 43, 32, 50, 52, 25],
  "2025-10-09": [49, 54, 30, 48, 36, 55, 41, 37, 39, 33],
  "2025-10-10": [54, 48, 53, 57, 40, 24, 21, 25, 52, 26],
  "2025-10-11": [57, 23, 45, 38, 48, 47, 41, 51, 54, 37],
  "2025-10-12": [31, 36, 38, 34, 42, 29, 37, 44, 24, 55],
  "2025-10-13": [33, 22, 56, 35, 49, 39, 31, 41, 48, 30],
  "2025-10-14": [51, 37, 18, 40, 48, 47, 42, 28, 29, 46],
  "2025-10-15": [50, 53, 26, 55, 30, 25, 28, 21, 27, 36],
  "2025-10-16": [55, 28, 42, 41, 54, 29, 52, 25, 21, 39],
  "2025-10-17": [33, 46, 53, 58, 40, 18, 49, 54, 57, 27],
  "2025-10-18": [38, 40, 54, 52, 27, 29, 39, 48, 42, 46],
  "2025-10-19": [35, 37, 49, 51, 45, 18, 30, 58, 55, 43],
  "2025-10-20": [30, 23, 55, 46, 42, 56, 39, 20, 19, 22],
  "2025-10-21": [25, 37, 41, 54, 33, 35, 23, 22, 27, 21],
  "2025-10-22": [27, 42, 52, 48, 36, 26, 44, 35, 18, 57],
  "2025-10-23": [39, 41, 19, 36, 55, 32, 33, 21, 42, 20],
  "2025-10-24": [35, 49, 28, 56, 26, 43, 27, 19, 53, 57],
  "2025-10-25": [39, 54, 29, 27, 21, 34, 18, 53, 40, 44],
  "2025-10-26": [31, 53, 43, 21, 49, 37, 29, 32, 58, 55],
  "2025-10-27": [31, 48, 45, 40, 46, 27, 33, 20, 51, 29],
  "2025-10-28": [20, 55, 25, 58, 41, 42, 37, 35, 23, 56],
  "2025-10-29": [55, 54, 27, 49, 38, 44, 57, 39, 21, 25],
  "2025-10-30": [54, 27, 48, 22, 34, 49, 39, 32, 40, 57],
  "2025-10-31": [50, 26, 47, 36, 32, 31, 46, 53, 30, 43],
  "2025-11-01": [19, 27, 21, 48, 46, 33, 28, 22, 29, 37],
  "2025-11-02": [52, 28, 56, 58, 26, 21, 23, 51, 40, 41],
  "2025-11-03": [27, 46, 54, 20, 24, 39, 41, 33, 23, 50],
  "2025-11-04": [35, 38, 25, 39, 47, 29, 28, 33, 44, 49],
  "2025-11-05": [28, 24, 56, 45, 52, 38, 39, 42, 54, 19],
  "2025-11-06": [56, 21, 30, 18, 51, 43, 53, 49, 57, 47],
  "2025-11-07": [46, 38, 57, 40, 24, 56, 49, 44, 51, 48],
  "2025-11-08": [42, 46, 38, 18, 28, 29, 43, 36, 34, 55],
  "2025-11-09": [51, 18, 35, 34, 58, 46, 32, 21, 19, 52],
  "2025-11-10": [56, 42, 29, 31, 32, 40, 50, 24, 39, 27],
  "2025-11-11": [42, 48, 32, 28, 45, 55, 21, 23, 35, 36],
  "2025-11-12": [18, 46, 40, 28, 43, 51, 52, 49, 29, 56],
  "2025-11-13": [27, 46, 32, 28, 25, 36, 24, 53, 51, 50],
  "2025-11-14": [34, 58, 56, 36, 28, 18, 41, 54, 24, 45],
  "2025-11-15": [28, 26, 55, 38, 25, 23, 47, 50, 53, 41],
  "2025-11-16": [42, 38, 55, 21, 24, 52, 27, 20, 19, 50],
  "2025-11-17": [48, 50, 39, 23, 21, 29, 58, 22, 36, 43],
  "2025-11-18": [26, 30, 33, 40, 24, 44, 53, 56, 35, 21],
  "2025-11-19": [18, 51, 34, 47, 28, 39, 48, 56, 33, 19],
  "2025-11-20": [25, 46, 40, 45, 47, 32, 22, 31, 42, 50],
  "2025-11-21": [40, 52, 39, 51, 54, 20, 30, 24, 57, 47],
  "2025-11-22": [40, 46, 23, 28, 34, 25, 33, 53, 51, 30],
  "2025-11-23": [47, 37, 27, 20, 33, 49, 24, 39, 44, 31],
  "2025-11-24": [51, 45, 42, 52, 22, 33, 26, 29, 36, 25],
  "2025-11-25": [20, 49, 57, 31, 36, 38, 47, 55, 21, 35],
  "2025-11-26": [47, 36, 57, 40, 35, 46, 53, 45, 32, 42],
  "2025-11-27": [31, 25, 36, 58, 40, 53, 45, 35, 42, 37],
  "2025-11-28": [46, 39, 28, 53, 26, 43, 52, 44, 33, 49],
  "2025-11-29": [41, 55, 33, 50, 52, 49, 38, 37, 40, 22],
  "2025-11-30": [53, 55, 18, 33, 30, 49, 52, 25, 43, 28],
  "2025-12-01": [28, 26, 40, 38, 39, 49, 29, 56, 36, 34],
  "2025-12-02": [28, 43, 33, 31, 18, 32, 58, 24, 34, 45],
  "2025-12-03": [33, 46, 39, 57, 25, 30, 19, 27, 49, 45],
  "2025-12-04": [24, 43, 54, 28, 21, 50, 45, 40, 19, 34],
  "2025-12-05": [18, 28, 35, 56, 48, 26, 19, 21, 22, 41],
  "2025-12-06": [53, 55, 38, 33, 37, 56, 29, 42, 51, 20],
  "2025-12-07": [18, 41, 56, 40, 44, 27, 58, 42, 32, 36],
  "2025-12-08": [55, 24, 57, 45, 36, 58, 35, 28, 27, 44],
  "2025-12-09": [18, 19, 53, 35, 21, 29, 31, 40, 41, 38],
  "2025-12-10": [58, 22, 37, 32, 24, 50, 42, 36, 33, 57],
  "2025-12-11": [33, 31, 57, 53, 23, 50, 27, 55, 24, 47],
  "2025-12-12": [56, 37, 44, 40, 50, 35, 20, 49, 54, 31],
  "2025-12-13": [31, 49, 44, 27, 39, 51, 43, 40, 20, 48],
  "2025-12-14": [23, 44, 33, 22, 39, 53, 50, 36, 47, 52],
  "2025-12-15": [20, 43, 38, 56, 41, 57, 49, 53, 26, 21],
  "2025-12-16": [30, 22, 48, 33, 56, 40, 37, 39, 25, 44],
  "2025-12-17": [28, 41, 33, 40, 44, 18, 46, 48, 34, 52],
  "2025-12-18": [47, 30, 22, 46, 41, 48, 33, 50, 38, 25],
  "2025-12-19": [56, 47, 36, 23, 39, 26, 32, 48, 51, 21],
  "2025-12-20": [30, 43, 24, 56, 36, 19, 18, 31, 35, 46],
  "2025-12-21": [43, 32, 25, 19, 41, 52, 44, 22, 40, 42],
  "2025-12-22": [19, 23, 33, 27, 41, 43, 24, 46, 49, 36],
  "2025-12-23": [31, 55, 54, 56, 41, 30, 53, 52, 37, 20],
  "2025-12-24": [29, 46, 21, 26, 22, 41, 20, 53, 28, 35],
  "2025-12-25": [25, 52, 43, 42, 28, 37, 36, 53, 26, 35],
  "2025-12-26": [24, 18, 30, 52, 56, 40, 54, 37, 53, 51],
  "2025-12-27": [27, 35, 32, 28, 21, 49, 44, 45, 47, 42],
  "2025-12-28": [45, 26, 42, 28, 21, 20, 24, 36, 53, 27],
  "2025-12-29": [44, 42, 23, 56, 25, 45, 35, 49, 52, 28],
  "2025-12-30": [28, 47, 50, 41, 54, 24, 45, 58, 48, 44],
  "2025-12-31": [42, 27, 23, 45, 34, 51, 38, 26, 18, 58],
  default: [39, 45, 42, 32, 47, 41, 31, 58, 36, 21],
};

export default data;
