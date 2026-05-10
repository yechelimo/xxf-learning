// ==================== 课程数据 ====================
const courses = [
  {
    id: 'python', icon: '🐍', title: 'Python编程基础',
    desc: '系统学习 Python 语法、数据结构、控制流、函数、面向对象编程等核心知识，打好编程基础。',
    chapters: [
      { title: '第1章 Python概述与环境搭建', content: [
        { type: 'text', text: 'Python 是一种解释型、面向对象的高级编程语言，由 Guido van Rossum 于 1991 年发布。Python 以简洁清晰的语法著称，被广泛应用于数据分析、人工智能、Web 开发等领域。' },
        { type: 'list', title: 'Python 核心特点', items: ['语法简洁易读，代码可读性高', '解释型语言，无需编译，开发效率高', '丰富的标准库和第三方库（如 NumPy、Pandas、Matplotlib）', '跨平台支持（Windows、macOS、Linux）', '支持面向过程、面向对象、函数式等多种编程范式'] },
        { type: 'code', code: '# 你的第一个Python程序\nprint("Hello, 商务数据分析!")', lang: 'python' },
        { type: 'list', title: '开发环境搭建', items: ['安装 Python 解释器（推荐 3.9+ 版本）', '使用 pip 管理第三方包（pip install pandas matplotlib）', '推荐 IDE：VS Code、PyCharm、Jupyter Notebook', 'Jupyter Notebook 特别适合数据分析的交互式探索'] }
      ]},
      { title: '第2章 变量与基本数据类型', content: [
        { type: 'text', text: 'Python 是动态类型语言，变量无需声明类型即可直接赋值。Python 会根据值自动推断类型。' },
        { type: 'list', title: '基本数据类型', items: ['整数 int：如 age = 20', '浮点数 float：如 price = 19.99', '字符串 str：如 name = "徐晓帆"，支持单引号或双引号', '布尔值 bool：True / False，用于条件判断', '空值 NoneType：None 表示"没有值"'] },
        { type: 'code', code: '# 变量赋值示例\nname = "徐晓帆"\nage = 21\nscore = 95.5\nis_passed = True\n\n# 使用 type() 查看变量类型\nprint(type(name))   # <class \'str\'>\nprint(type(age))    # <class \'int\'>\nprint(type(score))  # <class \'float\'>', lang: 'python' }
      ]},
      { title: '第3章 运算符与表达式', content: [
        { type: 'list', title: '常用运算符类型', items: ['算术运算符：+ - * / //（整除）%（取余）**（幂）', '比较运算符：== != > < >= <=，返回布尔值', '逻辑运算符：and（与）、or（或）、not（非）', '赋值运算符：= += -= *= /=，如 x += 1 等价于 x = x + 1', '成员运算符：in / not in，判断元素是否在容器中'] },
        { type: 'code', code: '# 运算符示例\nx, y = 10, 3\nprint(x // y)     # 3（整除）\nprint(x % y)      # 1（取余）\nprint(x ** y)     # 1000（10的3次方）\n\n# 逻辑运算\nprint(x > 5 and y < 5)  # True\nprint(not False)          # True', lang: 'python' }
      ]},
      { title: '第4章 字符串操作', content: [
        { type: 'text', text: '字符串是 Python 中最常用的数据类型之一。Python 提供了丰富的字符串操作方法，特别适合数据清洗和文本处理场景。' },
        { type: 'list', title: '常用字符串方法', items: ['len(s) — 获取字符串长度', 's.upper() / s.lower() — 大小写转换', 's.strip() — 去除首尾空白字符', 's.replace(old, new) — 替换子串', 's.split(sep) — 按分隔符拆分为列表', 's.find(sub) — 查找子串首次出现位置', 'f"{变量}" — f-string 格式化字符串'] },
        { type: 'code', code: '# 字符串操作示例\ntext = "  商务数据分析  "\nprint(text.strip())       # "商务数据分析"\nprint(text.replace("商务", "Business"))\n\n# f-string 格式化\nname, score = "徐晓帆", 95\nprint(f"{name}的成绩是{score}分")', lang: 'python' }
      ]},
      { title: '第5章 列表与元组', content: [
        { type: 'text', text: '列表（list）是 Python 中最灵活的数据结构，用于存储有序的元素集合。元组（tuple）与列表类似但元素不可修改。' },
        { type: 'list', title: '列表核心操作', items: ['创建：nums = [1, 2, 3, 4, 5]', '索引访问：nums[0]（第一个），nums[-1]（最后一个）', '切片：nums[1:3] 获取索引1到2的子列表', '添加：nums.append(6) / nums.insert(0, 0)', '删除：nums.pop() / nums.remove(3)', '列表推导式：[x*2 for x in nums if x > 2]'] },
        { type: 'code', code: '# 列表操作\nsales = [120, 340, 280, 410, 390]\nprint(f"总销售额: {sum(sales)}")\nprint(f"平均: {sum(sales)/len(sales):.1f}")\n\n# 列表推导式：找出销售额>300的月份\nhigh = [s for s in sales if s > 300]\nprint(f"高销售额: {high}")', lang: 'python' }
      ]},
      { title: '第6章 字典与集合', content: [
        { type: 'text', text: '字典（dict）以键值对方式存储数据，是数据分析中最常用的结构之一。集合（set）存储不重复的无序元素。' },
        { type: 'list', title: '字典核心操作', items: ['创建：d = {"name": "徐晓帆", "major": "商务数据分析"}', '访问：d["name"] 或 d.get("name", "默认值")', '添加/修改：d["score"] = 95', '遍历：for k, v in d.items()', '字典推导式：{k: v for k, v in d.items() if v > 80}'] },
        { type: 'code', code: '# 字典在数据分析中的应用\nstudent = {"name": "徐晓帆", "python": 92, "pandas": 88, "sql": 95}\n\n# 计算平均分\nscores = [v for k, v in student.items() if k != "name"]\navg = sum(scores) / len(scores)\nprint(f"平均分: {avg:.1f}")', lang: 'python' }
      ]},
      { title: '第7章 条件判断与循环', content: [
        { type: 'text', text: '条件判断（if-elif-else）和循环（for/while）是编程的核心控制结构。' },
        { type: 'list', title: '控制流要点', items: ['if-elif-else 用于多分支条件判断', 'for 循环遍历可迭代对象（列表、字典、range等）', 'while 循环在条件为真时持续执行', 'break 跳出循环，continue 跳过本次迭代', 'enumerate() 同时获取索引和值'] },
        { type: 'code', code: '# 条件判断与循环\nscores = [85, 72, 90, 68, 95]\n\n# 统计及格人数\npassed = 0\nfor i, s in enumerate(scores):\n    if s >= 60:\n        passed += 1\n    else:\n        print(f"第{i+1}位学生未及格: {s}分")\n\nprint(f"及格率: {passed/len(scores)*100:.1f}%")', lang: 'python' }
      ]},
      { title: '第8章 函数与模块', content: [
        { type: 'text', text: '函数封装可重用的代码逻辑，模块将相关函数组织在一起，提高代码的组织性和复用性。' },
        { type: 'list', title: '函数与模块要点', items: ['定义函数：def func_name(params):', '参数类型：位置参数、默认参数、关键字参数', '返回值：return 语句返回结果', '导入模块：import math / from math import sqrt', '常用内置模块：math, random, datetime, json, csv'] },
        { type: 'code', code: '# 定义数据分析函数\ndef calc_stats(data):\n    """计算数据的基本统计量"""\n    n = len(data)\n    mean = sum(data) / n\n    variance = sum((x - mean)**2 for x in data) / n\n    return {"mean": mean, "std": variance**0.5, "max": max(data), "min": min(data)}\n\nsales = [120, 340, 280, 410, 390]\nstats = calc_stats(sales)\nprint(stats)', lang: 'python' }
      ]}
    ]
  },
  {
    id: 'data-analysis', icon: '📊', title: '数据分析技术',
    desc: '掌握 Pandas 数据处理、NumPy 科学计算、数据可视化、统计分析、机器学习入门等数据分析核心技术。',
    chapters: [
      { title: '第1章 NumPy 科学计算基础', content: [
        { type: 'text', text: 'NumPy（Numerical Python）是 Python 科学计算的核心库，提供了高性能的多维数组对象（ndarray）和丰富的数学运算函数。' },
        { type: 'list', title: 'NumPy 核心要点', items: ['ndarray：多维数组，所有元素类型相同，内存连续存储', '创建数组：np.array([1,2,3])、np.zeros(5)、np.arange(10)', '数组运算：支持向量化操作，比纯 Python 循环快 10-100 倍', '切片索引：arr[1:5]、arr[:, 0]（二维按列取）、布尔索引', '聚合函数：np.sum()、np.mean()、np.std()、np.median()', '随机数：np.random.randn(100) 生成正态分布数据'] },
        { type: 'code', code: 'import numpy as np\n\n# 创建数组并进行向量化运算\nprices = np.array([12.5, 8.9, 15.0, 10.2, 7.5])\nquantities = np.array([100, 200, 150, 180, 300])\n\n# 计算总销售额（向量化乘法）\nrevenue = np.sum(prices * quantities)\nprint(f"总销售额: {revenue:.2f} 元")', lang: 'python' }
      ]},
      { title: '第2章 Pandas 数据结构入门', content: [
        { type: 'text', text: 'Pandas 是 Python 中最强大的数据分析库，提供了 Series（一维）和 DataFrame（二维）两种核心数据结构，是数据分析的必备工具。' },
        { type: 'list', title: 'Pandas 核心概念', items: ['Series：带标签的一维数组，类似带索引的列表', 'DataFrame：带标签的二维表格，类似 Excel 工作表', '读取数据：pd.read_csv()、pd.read_excel()、pd.read_json()', '数据预览：df.head()、df.info()、df.describe()', '选择数据：df["列名"]、df.loc[行标签]、df.iloc[行索引]', '条件筛选：df[df["销售额"] > 1000]'] },
        { type: 'code', code: 'import pandas as pd\n\n# 创建 DataFrame\ndata = {"商品": ["A","B","C","D"], "销量":[120,340,280,410], "单价":[10,15,12,8]}\ndf = pd.DataFrame(data)\n\n# 添加计算列\ndf["销售额"] = df["销量"] * df["单价"]\nprint(df)\nprint(f"\\n总销售额: {df[\'销售额\'].sum()} 元")', lang: 'python' }
      ]},
      { title: '第3章 数据清洗与预处理', content: [
        { type: 'text', text: '数据清洗是数据分析中最耗时但也最重要的环节。真实世界的数据往往包含缺失值、重复值、异常值和格式不一致等问题。' },
        { type: 'list', title: '数据清洗关键方法', items: ['缺失值检测：df.isnull().sum() 统计各列缺失数量', '缺失值处理：df.dropna() 删除 / df.fillna(value) 填充', '重复值处理：df.duplicated() 检测 / df.drop_duplicates() 删除', '数据类型转换：pd.to_datetime() 转日期、df.astype() 转类型', '字符串清洗：df["列"].str.strip()、.str.replace()', '异常值检测：IQR 法（Q3 + 1.5*IQR）、Z-score 法'] },
        { type: 'code', code: 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({"价格": [10, np.nan, 15, 100, 12], "数量": [5, 3, 7, 2, None]})\n\n# 缺失值处理\ndf["价格"] = df["价格"].fillna(df["价格"].median())\ndf["数量"] = df["数量"].fillna(df["数量"].mean())\n\n# 异常值处理（IQR法）\nQ1, Q3 = df["价格"].quantile([0.25, 0.75])\nIQR = Q3 - Q1\ndf = df[(df["价格"] >= Q1 - 1.5*IQR) & (df["价格"] <= Q3 + 1.5*IQR)]\nprint(df)', lang: 'python' }
      ]},
      { title: '第4章 数据聚合与分组', content: [
        { type: 'text', text: '数据分组聚合（Split-Apply-Combine）是数据分析中极为常用的模式：先将数据分组，再对每组应用聚合函数，最后合并结果。' },
        { type: 'list', title: '分组聚合要点', items: ['df.groupby("列") — 按列分组，返回 GroupBy 对象', '聚合函数：sum()、mean()、count()、max()、min()、std()', '多列聚合：df.groupby("city").agg({"sales": "sum", "price": "mean"})', '多维度分组：df.groupby(["城市", "品类"])', 'transform：保持原形状的分组运算', 'pivot_table：数据透视表，pd.pivot_table()'] },
        { type: 'code', code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "城市": ["上海","北京","上海","北京","广州"],\n    "品类": ["食品","食品","服装","服装","食品"],\n    "销售额": [1200, 800, 1500, 600, 900]\n})\n\n# 按城市聚合\ncity_stats = df.groupby("城市").agg(total=("销售额","sum"), avg=("销售额","mean")).round(1)\nprint(city_stats)\n\n# 数据透视表\npivot = df.pivot_table(values="销售额", index="城市", columns="品类", aggfunc="sum", fill_value=0)\nprint(pivot)', lang: 'python' }
      ]},
      { title: '第5章 数据可视化', content: [
        { type: 'text', text: '数据可视化将抽象的数字转化为直观的图形，帮助发现数据中隐藏的模式、趋势和异常。Python 中主要使用 Matplotlib 和 Seaborn。' },
        { type: 'list', title: '常见图表类型与用途', items: ['柱状图（bar）：类别对比，如各城市销售额对比', '折线图（line）：趋势变化，如月度销售额走势', '散点图（scatter）：两变量关系，如价格与销量关系', '饼图（pie）：占比分布，如各品类销售占比', '箱线图（boxplot）：分布与异常值检测', '热力图（heatmap）：相关性矩阵可视化'] },
        { type: 'code', code: 'import matplotlib.pyplot as plt\nimport pandas as pd\n\n# 月度销售趋势图\ndf = pd.DataFrame({"月": range(1,13), "销售额": [120,135,140,155,162,170,180,175,190,200,210,230]})\n\nplt.figure(figsize=(10,4))\nplt.plot(df["月"], df["销售额"], marker="o", color="#3b82f6", linewidth=2)\nplt.title("2024年月度销售额趋势", fontsize=14)\nplt.xlabel("月份"); plt.ylabel("销售额（万元）")\nplt.grid(True, alpha=0.3)\nplt.show()', lang: 'python' }
      ]},
      { title: '第6章 统计分析基础', content: [
        { type: 'text', text: '统计分析是数据分析的理论基础。掌握描述性统计、概率分布、假设检验等基本概念，能够更深入地理解数据。' },
        { type: 'list', title: '统计核心概念', items: ['描述性统计：均值、中位数、标准差、四分位数', '概率分布：正态分布、二项分布、泊松分布', '相关性分析：皮尔逊相关系数（Pearson r），取值范围 [-1, 1]', 'A/B 测试：实验组与对照组对比分析', '效果量计算：(实验组均值 - 对照组均值) / 对照组均值 × 100%', 'p 值：在原假设成立下观察到当前结果的概率，p < 0.05 通常认为显著'] },
        { type: 'code', code: 'import pandas as pd\nimport numpy as np\n\n# 模拟A/B测试数据\nnp.random.seed(42)\ncontrol = np.random.normal(100, 15, 1000)   # 对照组\ntreatment = np.random.normal(108, 15, 1000)  # 实验组\n\n# 计算转化率提升\nlift = (treatment.mean() - control.mean()) / control.mean() * 100\nprint(f"对照组均值: {control.mean():.2f}")\nprint(f"实验组均值: {treatment.mean():.2f}")\nprint(f"提升幅度: {lift:.2f}%")', lang: 'python' }
      ]},
      { title: '第7章 聚类分析', content: [
        { type: 'text', text: '聚类是一种无监督学习方法，将相似的数据点自动归入同一组。K-Means 是最常用的聚类算法之一，广泛用于客户细分、商品分类等场景。' },
        { type: 'list', title: '聚类分析要点', items: ['K-Means 原理：随机初始化 K 个中心点，迭代分配更新直至收敛', '选择 K 值：肘部法则（Elbow Method），观察簇内平方和拐点', '数据标准化：聚类前通常需要 StandardScaler 标准化', '应用场景：客户分群、产品分类、异常检测、图像分割', '评估指标：轮廓系数（Silhouette Score），越接近1聚类效果越好'] },
        { type: 'code', code: 'from sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\nimport numpy as np\n\n# 模拟客户数据：年收入(万) 和 年消费(万)\ncustomers = np.array([[20,5],[25,8],[30,10],[50,15],[55,18],[60,20],[80,8],[90,10],[85,12]])\n\n# 标准化\nscaler = StandardScaler()\ndata_scaled = scaler.fit_transform(customers)\n\n# K-Means 聚类\nkmeans = KMeans(n_clusters=3, random_state=42)\nlabels = kmeans.fit_predict(data_scaled)\nprint(f"聚类标签: {labels}")', lang: 'python' }
      ]},
      { title: '第8章 特征工程', content: [
        { type: 'text', text: '特征工程是将原始数据转化为更适合模型使用的特征的过程，对机器学习模型的效果有决定性影响。' },
        { type: 'list', title: '特征工程常用方法', items: ['数值特征：标准化（StandardScaler）、归一化（MinMaxScaler）、分箱（pd.cut/qcut）', '类别特征：独热编码（pd.get_dummies）、标签编码（LabelEncoder）', '日期特征：提取年/月/日/星期/季度、距某日天数', '文本特征：TF-IDF、词频统计', '特征组合：交叉特征、多项式特征', '特征选择：方差分析、相关系数筛选、L1正则化'] },
        { type: 'code', code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "日期": pd.date_range("2024-01-01", periods=5),\n    "品类": ["食品","服装","食品","服装","食品"],\n    "金额": [120, 340, 280, 410, 390]\n})\n\n# 日期特征提取\ndf["月份"] = df["日期"].dt.month\ndf["星期"] = df["日期"].dt.dayofweek\n\n# 类别特征独热编码\ndf = pd.get_dummies(df, columns=["品类"], prefix="品类")\nprint(df)', lang: 'python' }
      ]}
    ]
  },
  {
    id: 'data-collection', icon: '🔍', title: '数据采集与处理',
    desc: '学习数据源的识别与获取、数据读取（CSV/Excel/数据库）、数据加工清洗、数据合并连接、数据质量评估等全流程技能。',
    chapters: [
      { title: '第1章 数据源类型与获取', content: [
        { type: 'text', text: '数据采集是数据分析流程的起点。理解不同类型的数据源及其获取方式，是数据分析师的基本功。' },
        { type: 'list', title: '常见数据源类型', items: ['结构化数据：数据库表、CSV文件、Excel表格，具有固定的行列结构', '半结构化数据：JSON、XML、HTML，有标签标记但结构灵活', '非结构化数据：文本、图片、视频、日志文件，需要额外处理', 'API 数据：通过 RESTful API 从平台获取实时数据（如电商API、天气API）', 'Web 爬虫：使用 requests + BeautifulSoup 从网页提取数据', '企业系统：ERP、CRM、SCM 等系统导出的业务数据'] },
        { type: 'code', code: 'import pandas as pd\n\n# 读取不同格式数据\ndf_csv = pd.read_csv("sales_data.csv", encoding="utf-8")\ndf_excel = pd.read_excel("report.xlsx", sheet_name="Sheet1")\ndf_json = pd.read_json("api_response.json")\n\n# 从数据库读取（需要对应驱动）\n# df = pd.read_sql("SELECT * FROM orders", connection)\n\nprint(f"CSV数据: {df_csv.shape}")\nprint(f"Excel数据: {df_excel.shape}")', lang: 'python' }
      ]},
      { title: '第2章 数据加工基本操作', content: [
        { type: 'text', text: '数据加工是指对原始数据进行转换、计算、衍生等操作，使其更适合分析需求。这是数据分析中工作量最大的环节。' },
        { type: 'list', title: '数据加工核心操作', items: ['列选择与重命名：df[["col1","col2"]]、df.rename(columns={...})', '条件筛选：df.query("sales > 1000")、df[df["city"] == "上海"]', '排序：df.sort_values("sales", ascending=False)', '新增计算列：df["利润率"] = (df["收入"] - df["成本"]) / df["收入"]', '数据类型转换：astype()、pd.to_numeric()、pd.to_datetime()', '数据抽样：df.sample(n=100, random_state=42)'] }
      ]},
      { title: '第3章 数据合并与连接', content: [
        { type: 'text', text: '在实际分析中，数据往往分散在多个表格中。数据合并（Merge/Join）将不同来源的数据按关联键组合在一起。' },
        { type: 'list', title: '合并操作类型', items: ['内连接（inner join）：只保留两表都匹配的行', '左连接（left join）：保留左表所有行，右表匹配不到的填充 NaN', '全外连接（outer join）：保留两表所有行', '纵向拼接：pd.concat([df1, df2], axis=0) 追加行', '横向拼接：pd.concat([df1, df2], axis=1) 追加列', '合并去重：merge 后检查重复行'] },
        { type: 'code', code: 'import pandas as pd\n\norders = pd.DataFrame({"订单号": [1,2,3,4], "客户ID": [101,102,103,101], "金额": [120,340,280,410]})\ncustomers = pd.DataFrame({"客户ID": [101,102,103], "姓名": ["张三","李四","王五"], "城市": ["上海","北京","广州"]})\n\n# 左连接：保留所有订单，补充客户信息\nresult = orders.merge(customers, on="客户ID", how="left")\nprint(result)', lang: 'python' }
      ]},
      { title: '第4章 数据质量评估', content: [
        { type: 'text', text: '数据质量直接影响分析结果的可靠性。"垃圾进，垃圾出"（Garbage In, Garbage Out）是数据分析的基本原则。' },
        { type: 'list', title: '数据质量评估维度', items: ['完整性：缺失值比例、必填字段覆盖率', '准确性：数据是否真实反映业务实际', '一致性：同一数据在不同来源是否一致', '唯一性：是否存在重复记录', '时效性：数据是否在有效时间范围内', '有效性：数据是否符合预定义格式和规则'] }
      ]},
      { title: '第5章 数据导出与报告', content: [
        { type: 'text', text: '数据处理完成后，需要将结果导出为可用格式或生成分析报告，供业务决策使用。' },
        { type: 'list', title: '数据导出方式', items: ['导出为 CSV：df.to_csv("output.csv", index=False, encoding="utf-8-sig")', '导出为 Excel：df.to_excel("output.xlsx", sheet_name="结果", index=False)', '导出为 JSON：df.to_json("output.json", orient="records", force_ascii=False)', '导出到数据库：df.to_sql("table_name", connection, if_exists="replace")', '批量导出：多Sheet Excel、按条件分组导出', '导出可视化报告：结合 Matplotlib 导出图表 + 数据摘要'] },
        { type: 'code', code: 'import pandas as pd\n\ndf = pd.DataFrame({"城市": ["上海","北京","广州"], "销售额": [1200, 800, 900]})\n\n# 导出为 CSV（推荐 utf-8-sig 编码，Excel可直接打开）\ndf.to_csv("sales_report.csv", index=False, encoding="utf-8-sig")\nprint("已导出 sales_report.csv")\n\n# 导出为 Excel 多Sheet\nwith pd.ExcelWriter("report.xlsx") as writer:\n    df.to_excel(writer, sheet_name="销售汇总", index=False)\n    df.describe().to_excel(writer, sheet_name="统计描述")\nprint("已导出 report.xlsx")', lang: 'python' }
      ]},
      { title: '第6章 综合实战', content: [
        { type: 'text', text: '综合运用数据采集、清洗、加工、合并、质量评估和导出的全流程技能，完成一个完整的数据处理项目。' },
        { type: 'code', code: 'import pandas as pd\nimport numpy as np\n\n# 综合实战：处理销售数据全流程\n# Step 1-2：读取并清洗订单数据\norders = pd.read_csv("orders.csv")\norders["金额"] = orders["金额"].fillna(orders["金额"].median())\norders = orders.drop_duplicates()\n\n# Step 3-4：关联客户信息\ncustomers = pd.read_excel("customers.xlsx")\ndf = orders.merge(customers, on="客户ID", how="left")\n\n# Step 5：质量检查\nprint(f"总行数: {len(df)}, 缺失值: {df.isnull().sum().sum()}")\nprint(f"重复行: {df.duplicated().sum()}")\n\n# Step 6：导出结果\ndf.to_csv("final_report.csv", index=False, encoding="utf-8-sig")\nprint("数据处理完成！已导出 final_report.csv")', lang: 'python' }
      ]}
    ]
  },
  {
    id: 'supply-chain', icon: '🚚', title: '供应链数据分析',
    desc: '结合供应链业务场景，学习物流成本分析、库存优化、客户细分、关联分析、销售预测、供应商评估等实用分析技能。',
    chapters: [
      { title: '第1章 供应链核心指标体系', content: [
        { type: 'text', text: '供应链数据分析围绕一系列关键绩效指标（KPI）展开，理解这些指标是开展分析的前提。' },
        { type: 'list', title: '供应链核心 KPI', items: ['库存周转率 = 销售成本 / 平均库存', '准时交付率 = 准时交付订单数 / 总订单数 × 100%', '物流成本率 = 物流成本 / 营业收入 × 100%', '缺货率 = 缺货次数 / 总需求次数 × 100%', '客户满意率 = 满意客户数 / 调查总客户数 × 100%', '供应链总成本 = 采购成本 + 生产成本 + 物流成本 + 库存持有成本'] },
        { type: 'code', code: 'import pandas as pd\n\n# 计算物流成本率\ndata = pd.DataFrame({\n    "月份": range(1,7),\n    "营业收入": [120,135,140,155,162,170],\n    "物流成本": [18,19,20,21,22,23]\n})\ndata["物流成本率"] = (data["物流成本"] / data["营业收入"] * 100).round(2)\nprint(data)\nprint(f"平均物流成本率: {data[\'物流成本率\'].mean():.2f}%")', lang: 'python' }
      ]},
      { title: '第2章 库存数据分析', content: [
        { type: 'text', text: '库存管理是供应链的核心环节。通过数据分析可以优化库存水平，在保证供应的同时降低库存持有成本。' },
        { type: 'list', title: '库存分析要点', items: ['ABC 分类：按价值将库存分为A（高价值/少量）、B（中等）、C（低价值/大量）', '安全库存计算：SS = Z × σ × √LT', '经济订货量（EOQ）：平衡订货成本与持有成本的最优订货量', '库存周转分析：周转率过低可能意味着积压，过高可能面临缺货风险'] }
      ]},
      { title: '第3章 市场购物篮分析', content: [
        { type: 'text', text: '关联分析用于发现"买了A的顾客也倾向于买B"这样的商品关联规则，是零售和电商领域的经典分析方法。' },
        { type: 'list', title: '关联规则核心指标', items: ['支持度（Support）= 同时包含A和B的交易数 / 总交易数', '置信度（Confidence）= 同时包含A和B的交易数 / 包含A的交易数', '提升度（Lift）= 置信度 / B的支持度。Lift > 1 表示正相关', 'Apriori 算法：通过迭代方式挖掘频繁项集'] }
      ]},
      { title: '第4章 客户细分与价值分析', content: [
        { type: 'text', text: '客户细分将客户按特定维度分组，帮助企业制定差异化的营销和服务策略。RFM 模型是经典的客户价值分析方法。' },
        { type: 'list', title: 'RFM 模型维度', items: ['最近购买时间（Recency）', '购买频率（Frequency）', '购买金额（Monetary）', '客户生命周期：新客户、活跃客户、沉睡客户、流失客户'] },
        { type: 'code', code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "客户": ["A","B","C","D","E","F"],\n    "最近购买天数": [5,30,2,60,10,90],\n    "购买次数": [20,5,30,2,15,1],\n    "总消费金额": [5000,800,8000,300,3000,200]\n})\n\n# 按中位数二分类，简化RFM打分\ndf["R_score"] = (df["最近购买天数"] <= df["最近购买天数"].median()).astype(int)\ndf["F_score"] = (df["购买次数"] >= df["购买次数"].median()).astype(int)\ndf["M_score"] = (df["总消费金额"] >= df["总消费金额"].median()).astype(int)\ndf["RFM总分"] = df["R_score"] + df["F_score"] + df["M_score"]\nprint(df)', lang: 'python' }
      ]},
      { title: '第5章 销售预测', content: [
        { type: 'text', text: '销售预测帮助企业提前规划采购、生产和库存，降低运营成本，提高服务水平。' },
        { type: 'list', title: '销售预测方法', items: ['时间序列分析：识别趋势、季节性、周期性模式', '移动平均法：过去 N 期的平均值作为预测值', '指数平滑法：近期数据权重更高', '回归预测：基于影响因素建立回归模型', '机器学习方法：随机森林、XGBoost 等集成方法'] },
        { type: 'code', code: 'import pandas as pd\nimport numpy as np\n\n# 简单移动平均预测\ndates = pd.date_range("2024-01-01", periods=12, freq="ME")\ndf = pd.DataFrame({"日期": dates, "实际销售": [120,135,140,155,162,170,180,175,190,200,210,230]})\n\n# 3期移动平均预测\ndf["预测值_MA3"] = df["实际销售"].rolling(window=3).mean().shift(1)\nprint(df[["日期","实际销售","预测值_MA3"]].tail(6))', lang: 'python' }
      ]},
      { title: '第6章 供应商评估', content: [
        { type: 'text', text: '供应商评估帮助企业选择和管理最合适的供应商伙伴，建立稳定高效的供应链体系。' },
        { type: 'list', title: '供应商评估维度', items: ['质量维度：产品合格率、退货率、质量认证', '交付维度：准时交付率、交货周期、灵活性', '成本维度：价格竞争力、付款条件、运输成本', '服务维度：响应速度、售后支持、沟通效率', '综合评价：加权评分法、层次分析法（AHP）'] }
      ]}
    ]
  }
];

// ==================== 练习题数据 ====================
const quizData = {
  python: [
    { type: 'single', q: 'Python 中以下哪个是合法的变量名？', options: ['2name', '_name', 'class', 'my-name'], answer: 1, explain: '变量名可以以下划线开头，但不能以数字开头，不能使用关键字，不能包含连字符。' },
    { type: 'single', q: '以下哪个方法可以向列表末尾添加元素？', options: ['list.add()', 'list.insert()', 'list.append()', 'list.extend()'], answer: 2, explain: 'append() 在列表末尾添加单个元素；extend() 添加可迭代对象的每个元素；insert() 在指定位置插入。' },
    { type: 'single', q: 'Python 中 dict 的键可以使用以下哪种类型？', options: ['列表', '字典', '字符串', '集合'], answer: 2, explain: '字典的键必须是不可变类型（如字符串、数字、元组），列表和字典是可变的不能作为键。' },
    { type: 'multi', q: '以下哪些是 Pandas 的数据结构？（多选）', options: ['Series', 'DataFrame', 'ndarray', 'Panel'], answer: [0,1], explain: 'Series 和 DataFrame 是 Pandas 的核心数据结构，ndarray 属于 NumPy。' },
    { type: 'multi', q: '以下哪些方法可以处理缺失值？（多选）', options: ['df.dropna()', 'df.fillna()', 'df.isnull()', 'df.sum()'], answer: [0,1,2], explain: 'dropna() 删除缺失值，fillna() 填充缺失值，isnull() 检测缺失值。sum() 是聚合函数不直接处理缺失值。' },
    { type: 'judge', q: '元组（tuple）一旦创建就不能修改。', answer: true, explain: '元组是不可变类型，创建后不能增删改元素。' },
    { type: 'judge', q: 'Pandas 的 groupby 操作后一定会返回 DataFrame。', answer: false, explain: 'groupby 返回 GroupBy 对象，需要调用聚合函数后才返回 DataFrame 或 Series。' },
    { type: 'fill', q: '在 Pandas 中，使用 df._____("city") 可以按城市列进行分组。', answer: 'groupby', explain: 'df.groupby("列名") 是 Pandas 中最常用的分组方法。' }
  ],
  'data-analysis': [
    { type: 'single', q: '以下哪个不是数据清洗的操作？', options: ['处理缺失值', '删除重复数据', '数据可视化', '格式转换'], answer: 2, explain: '数据可视化属于数据展示阶段，不属于数据清洗。' },
    { type: 'single', q: 'K-Means 聚类中，K 值代表什么？', options: ['迭代次数', '聚类中心的数量', '数据维度', '样本数量'], answer: 1, explain: 'K 代表聚类的数量，即最终将数据分为 K 个簇。' },
    { type: 'multi', q: '以下哪些是数据质量评估的维度？（多选）', options: ['完整性', '准确性', '一致性', '美观性'], answer: [0,1,2], explain: '美观性不属于数据质量评估范畴。' },
    { type: 'judge', q: 'p 值小于 0.05 通常表示结果具有统计显著性。', answer: true, explain: '在显著性水平 α=0.05 下，p < 0.05 通常拒绝原假设。' },
    { type: 'fill', q: '使用 StandardScaler 对数据进行_____处理，使数据均值为0，标准差为1。', answer: '标准化', explain: '标准化将数据转换为均值为0、标准差为1的分布。' },
    { type: 'fill', q: 'A/B 测试的效果量计算公式为：(实验组转化率 - _____转化率) / 对照组转化率 × 100%。', answer: '对照组', explain: '效果量表示实验组相对于对照组的提升幅度。' }
  ],
  'data-collection': [
    { type: 'single', q: '以下哪种格式不属于半结构化数据？', options: ['JSON', 'XML', 'CSV', 'HTML'], answer: 2, explain: 'CSV 是结构化数据格式。JSON、XML、HTML 都属于半结构化数据。' },
    { type: 'multi', q: 'Pandas 支持读取以下哪些数据格式？（多选）', options: ['CSV', 'Excel', 'JSON', 'SQL'], answer: [0,1,2,3], explain: 'Pandas 可以读取所有这些格式。' },
    { type: 'judge', q: '数据合并时，左连接（left join）会保留右表的所有行。', answer: false, explain: '左连接保留左表的所有行，右表匹配不到的用 NaN 填充。' },
    { type: 'fill', q: '使用 pd._____([df1, df2]) 方法可以纵向拼接两个 DataFrame。', answer: 'concat', explain: 'pd.concat() 可以按行或按列拼接多个 DataFrame。' }
  ],
  'supply-chain': [
    { type: 'single', q: '以下哪个指标用于衡量库存管理效率？', options: ['毛利率', '库存周转率', '资产负债率', '市盈率'], answer: 1, explain: '库存周转率 = 销售成本 / 平均库存，是衡量库存管理效率的核心指标。' },
    { type: 'multi', q: 'RFM 模型包括以下哪些维度？（多选）', options: ['最近购买时间', '购买频率', '购买金额', '客户年龄'], answer: [0,1,2], explain: 'RFM 模型包含 Recency、Frequency、Monetary 三个维度。' },
    { type: 'judge', q: '关联规则中，提升度（Lift）大于 1 表示商品间存在正相关关系。', answer: true, explain: 'Lift > 1 表示正相关（推荐有意义）。' },
    { type: 'fill', q: '物流成本率的计算公式为：_____成本 / 营业收入 × 100%。', answer: '物流', explain: '物流成本率反映每单位营业收入中物流成本的占比。' }
  ]
};

// ==================== localStorage 状态 ====================
function getState(key, defaultVal) {
  try { return JSON.parse(localStorage.getItem(key)) || defaultVal; } catch(e) { return defaultVal; }
}
function setState(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

// ==================== 侧边栏渲染 ====================
function renderSidebar(currentCourse, currentChapter) {
  const container = document.getElementById('sidebarCourses');
  if (!container) return;
  let html = '';
  courses.forEach(c => {
    let completed = 0;
    const completedChapters = getState('completedChapters', {});
    c.chapters.forEach((ch, i) => {
      if (completedChapters[c.id + '_' + i]) completed++;
    });
    html += '<div class="course-group">' +
      '<div class="course-header" onclick="toggleSidebarCourse(this)">' +
        '<span>' + c.icon + ' ' + c.title + '</span>' +
        '<span style="display:flex;align-items:center;gap:6px;">' +
          '<span style="font-size:11px;color:var(--text-secondary);">' + completed + '/' + c.chapters.length + '</span>' +
          '<span class="arrow">▶</span>' +
        '</span>' +
      '</div>' +
      '<div class="chapter-list' + (currentCourse === c.id ? ' open' : '') + '">';
    c.chapters.forEach((ch, i) => {
      const active = currentCourse === c.id && currentChapter === i;
      const done = completedChapters[c.id + '_' + i];
      html += '<a href="learning.html?course=' + c.id + '&chapter=' + i + '" class="' + (active ? 'active' : '') + '">' +
        (done ? '✓ ' : '') + ch.title + '</a>';
    });
    html += '</div></div>';
  });
  container.innerHTML = html;
}

function toggleSidebarCourse(header) {
  header.classList.toggle('open');
  header.nextElementSibling.classList.toggle('open');
}

// ==================== 进度更新 ====================
function updateProgress() {
  let totalChapters = 0, completed = 0;
  const completedChapters = getState('completedChapters', {});
  courses.forEach(c => {
    c.chapters.forEach((ch, i) => {
      totalChapters++;
      if (completedChapters[c.id + '_' + i]) completed++;
    });
  });
  const pct = totalChapters > 0 ? Math.round(completed / totalChapters * 100) : 0;
  const el1 = document.getElementById('overallProgressText');
  const el2 = document.getElementById('overallProgressBar');
  if (el1) el1.textContent = pct + '%';
  if (el2) el2.style.width = pct + '%';
}

function markChapterComplete(courseId, chapterIdx) {
  const completedChapters = getState('completedChapters', {});
  const key = courseId + '_' + chapterIdx;
  if (completedChapters[key]) {
    delete completedChapters[key];
  } else {
    completedChapters[key] = true;
  }
  setState('completedChapters', completedChapters);
}

// ==================== 移动端菜单 ====================
function setupMobile() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const mobileBtn = document.getElementById('mobileSidebarBtn');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function() {
      sidebar.classList.remove('mobile-open');
      overlay.classList.remove('show');
    });
  }
  if (mobileBtn) {
    mobileBtn.addEventListener('click', function() {
      sidebar.classList.toggle('mobile-open');
      overlay.classList.toggle('show');
    });
  }

  // 高亮当前导航
  const pageName = document.body.dataset.page;
  if (pageName) {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(function(a) {
      if (a.dataset.page === pageName) a.classList.add('active');
    });
  }
}

// ==================== 工具函数 ====================
function getUrlParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}
