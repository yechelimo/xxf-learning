#!/usr/bin/env python3
"""全面优化：补充练习题、返回顶部、代码复制、侧边栏记住状态"""

import re

BASE = r'C:\Users\晓帆\Desktop\hal的网页'

# ===== 1. 补充 data-analysis 章节练习题 =====
with open(BASE + '/common.js', 'r', encoding='utf-8') as f:
    common = f.read()

# 在 data-analysis 的第0章练习题后面补充更多题
# 找到 data-analysis 的练习题部分并扩充
old_da_ex = """"data-analysis": {
            "0": [{"type":"single","q":"NumPy 中 np.array([1,2,3]) + 1 的结果是？","options":["报错","[2,3,4]","[1,2,3]","[1,2,3,1]"],"answer":1,"explain":"NumPy的向量化运算——每个元素自动加1，无需写循环。这是NumPy高性能的原因之一。"}],
            "1": [{"type":"single","q":"Pandas 中以下哪个属于一维数据结构？","options":["DataFrame","Series","ndarray","Panel"],"answer":1,"explain":"Series 是一维带标签数组，DataFrame 是二维表格。ndarray 属于NumPy。"}],
            "2": [{"type":"single","q":"以下哪个不是数据清洗操作？","options":["处理缺失值","删除重复数据","数据可视化","格式转换"],"answer":2,"explain":"数据可视化属于数据展示阶段。数据清洗是数据预处理的核心环节。"}],
            "3": [{"type":"fill","q":"df.groupby('city')['sales']._____() 可以计算各城市销售总额。","answer":"sum","explain":"groupby后调用聚合函数（sum/mean/count等）才能产生结果。注意groupby本身返回GroupBy对象。"}],
            "4": [{"type":"single","q":"merge(df1, df2, how='left') 中 left 的含义是？","options":["保留df1所有行","保留df2所有行","只保留匹配行","保留所有行"],"answer":0,"explain":"左连接保留左表(df1)的所有行，右表(df2)中匹配不到的值填充NaN。"}],
            "5": [{"type":"multi","q":"以下哪些是常用的数据可视化图表？（多选）","options":["柱状图","折线图","散点图","哈希表"],"answer":[0,1,2],"explain":"柱状图对比分类数据，折线图展示趋势，散点图展示变量关系。哈希表是数据结构不是图表。"}],
            "6": [{"type":"judge","q":"p值小于0.05通常表示研究结果具有统计显著性。","answer":True,"explain":"α=0.05是最常用的显著性水平。p<0.05表示在原假设下观察到当前结果的概率小于5%%。"}],
            "7": [{"type":"single","q":"pd.get_dummies() 的作用是？","options":["填充缺失值","独热编码","删除重复值","数据排序"],"answer":1,"explain":"get_dummies 将类别变量转换为多个0/1虚拟变量，是特征工程中最常用的类别编码方法。"}],
            "8": [{"type":"single","q":"K-Means聚类前为什么要做标准化？","options":["看起来更美观","消除量纲影响","加快速度","减少内存"],"answer":1,"explain":"不同特征的量纲不同（如年龄0-100 vs 收入0-100000），标准化使所有特征在同一尺度上，避免某一维主导聚类结果。"}],
            "9": [{"type":"fill","q":"df.resample('ME') 中的 'ME' 表示按 _____ 重采样。","answer":"月","explain":"resample 是Pandas时间序列处理的核心方法。'ME'=月末，'W'=周，'Q'=季度，'Y'=年。"}]"""

new_da_ex = """"data-analysis": {
            "0": [{"type":"single","q":"NumPy 中 np.array([1,2,3]) + 1 的结果是？","options":["报错","[2,3,4]","[1,2,3]","[1,2,3,1]"],"answer":1,"explain":"NumPy的向量化运算——每个元素自动加1，无需写循环。这是NumPy高性能的原因之一。"},{"type":"judge","q":"NumPy 的 ndarray 所有元素必须是同一类型。","answer":True,"explain":"ndarray 是同构数组，所有元素类型相同。这是它比Python列表快的主要原因——内存连续且无需类型检查。"},{"type":"single","q":"np.arange(0, 10, 2) 的结果是？","options":["[0,1,2,...,9]","[0,2,4,6,8]","[2,4,6,8,10]","[0,2,4,6,8,10]"],"answer":1,"explain":"arange(start, stop, step) 从start开始，到stop之前结束，步长为step。注意stop=10不包含在内。"}],
            "1": [{"type":"single","q":"Pandas 中以下哪个属于一维数据结构？","options":["DataFrame","Series","ndarray","Panel"],"answer":1,"explain":"Series 是一维带标签数组，DataFrame 是二维表格。ndarray 属于NumPy。"},{"type":"single","q":"df.head() 默认显示几行？","options":["3行","5行","10行","全部"],"answer":1,"explain":"head()默认显示前5行。head(10)显示前10行。tail()显示后5行。"},{"type":"judge","q":"df['列名'] 返回的是一个 DataFrame。","answer":False,"explain":"df['列名'] 返回的是 Series。df[['列名']]（双层方括号）才返回 DataFrame。"}],
            "2": [{"type":"single","q":"以下哪个不是数据清洗操作？","options":["处理缺失值","删除重复数据","数据可视化","格式转换"],"answer":2,"explain":"数据可视化属于数据展示阶段。数据清洗是数据预处理的核心环节。"},{"type":"fill","q":"使用 df.dropna() 会删除包含 _____ 值的行。","answer":"缺失","explain":"dropna() 删除任何包含NaN（缺失值）的行。参数 how='all' 只删除全为NaN的行。"},{"type":"single","q":"IQR 法中，异常值的下界计算公式是？","options":["Q1 - IQR","Q1 - 1.5*IQR","Q1 - 2*IQR","Q1 - 3*IQR"],"answer":1,"explain":"IQR=Q3-Q1。异常值：< Q1-1.5*IQR 或 > Q3+1.5*IQR。这是最常用的异常值检测方法。"}],
            "3": [{"type":"fill","q":"df.groupby('city')['sales']._____() 可以计算各城市销售总额。","answer":"sum","explain":"groupby后调用聚合函数（sum/mean/count等）才能产生结果。注意groupby本身返回GroupBy对象。"},{"type":"multi","q":"以下哪些是 Pandas 的聚合函数？（多选）","options":["sum()","mean()","std()","plot()"],"answer":[0,1,2],"explain":"sum/mean/std都是聚合函数。plot()是可视化方法，不是聚合函数。"},{"type":"judge","q":"transform() 会改变原 DataFrame 的行数。","answer":False,"explain":"transform() 保持原DataFrame的形状（行数不变），对每组计算后广播回原形状。这与agg()不同——agg()会减少行数。"}],
            "4": [{"type":"single","q":"merge(df1, df2, how='left') 中 left 的含义是？","options":["保留df1所有行","保留df2所有行","只保留匹配行","保留所有行"],"answer":0,"explain":"左连接保留左表(df1)的所有行，右表(df2)中匹配不到的值填充NaN。"},{"type":"single","q":"pd.concat([df1, df2], axis=1) 的作用是？","options":["纵向拼接（加行）","横向拼接（加列）","去重","分组"],"answer":1,"explain":"axis=0 纵向追加行，axis=1 横向追加列。concat 是 DataFrame 拼接的主要方法。"}],
            "5": [{"type":"multi","q":"以下哪些是常用的数据可视化图表？（多选）","options":["柱状图","折线图","散点图","哈希表"],"answer":[0,1,2],"explain":"柱状图对比分类数据，折线图展示趋势，散点图展示变量关系。哈希表是数据结构不是图表。"},{"type":"judge","q":"Matplotlib 默认支持中文显示，无需额外设置。","answer":False,"explain":"Matplotlib 默认不支持中文，需要设置字体：plt.rcParams['font.sans-serif'] = ['SimHei']。"}],
            "6": [{"type":"judge","q":"p值小于0.05通常表示研究结果具有统计显著性。","answer":True,"explain":"α=0.05是最常用的显著性水平。p<0.05表示在原假设下观察到当前结果的概率小于5%%。"},{"type":"fill","q":"皮尔逊相关系数 r 的取值范围是 _____ 到 1。","answer":"-1","explain":"r∈[-1,1]。r=1完全正相关，r=-1完全负相关，r=0无线性关系。"}],
            "7": [{"type":"single","q":"pd.get_dummies() 的作用是？","options":["填充缺失值","独热编码","删除重复值","数据排序"],"answer":1,"explain":"get_dummies 将类别变量转换为多个0/1虚拟变量，是特征工程中最常用的类别编码方法。"},{"type":"fill","q":"使用 StandardScaler 对数据进行_____，使均值为0标准差为1。","answer":"标准化","explain":"标准化(Standardization)公式：z=(x-μ)/σ。归一化(MinMaxScaler)则缩放到[0,1]。"}],
            "8": [{"type":"single","q":"K-Means聚类前为什么要做标准化？","options":["看起来更美观","消除量纲影响","加快速度","减少内存"],"answer":1,"explain":"不同特征的量纲不同（如年龄0-100 vs 收入0-100000），标准化使所有特征在同一尺度上，避免某一维主导聚类结果。"},{"type":"single","q":"肘部法则（Elbow Method）用于选择什么？","options":["数据标准化方法","最佳K值","聚类算法","评估指标"],"answer":1,"explain":"肘部法则观察不同K值下的簇内平方和(SSE)，找到SSE下降变缓的'肘部'位置作为最佳K值。"}],
            "9": [{"type":"fill","q":"df.resample('ME') 中的 'ME' 表示按 _____ 重采样。","answer":"月","explain":"resample 是Pandas时间序列处理的核心方法。'ME'=月末，'W'=周，'Q'=季度，'Y'=年。"},{"type":"judge","q":"移动平均的窗口越大，曲线越平滑，但对变化的响应越慢。","answer":True,"explain":"窗口大小是平滑度和灵敏度的权衡。大窗口更平滑但滞后，小窗口更灵敏但噪声大。"}]"""

common = common.replace(old_da_ex, new_da_ex)

with open(BASE + '/common.js', 'w', encoding='utf-8') as f:
    f.write(common)
print('OK: data-analysis exercises expanded (10→24 questions)')

# ===== 2. 更新 common.js 添加返回顶部 + 代码复制 + 侧边栏状态记忆 =====
# 在 setupMobile 函数后面添加新功能
new_funcs = """
// ==================== 返回顶部按钮 ====================
(function() {
  if (document.getElementById('backToTop')) return;
  var btn = document.createElement('button');
  btn.id = 'backToTop';
  btn.innerHTML = '↑';
  btn.title = '返回顶部';
  btn.onclick = function() { window.scrollTo({ top: 0, behavior: 'smooth' }); };
  document.body.appendChild(btn);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) { btn.classList.add('show'); }
    else { btn.classList.remove('show'); }
  });
})();

// ==================== 代码块复制功能 ====================
function copyCode(btn) {
  var textarea = btn.parentElement.parentElement.querySelector('textarea');
  if (!textarea) return;
  var code = textarea.value || textarea.textContent;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(function() {
      btn.textContent = '✓ 已复制';
      setTimeout(function() { btn.textContent = '📋 复制代码'; }, 2000);
    });
  } else {
    // 降级方案
    textarea.select();
    document.execCommand('copy');
    btn.textContent = '✓ 已复制';
    setTimeout(function() { btn.textContent = '📋 复制代码'; }, 2000);
  }
}

// ==================== 侧边栏折叠状态记忆 ====================
function toggleSidebarCourse(header) {
  header.classList.toggle('open');
  header.nextElementSibling.classList.toggle('open');
  // 记住状态
  var courseTitle = header.querySelector('span').textContent.trim();
  var openCourses = getState('openSidebarCourses', []);
  var idx = openCourses.indexOf(courseTitle);
  if (idx > -1) { openCourses.splice(idx, 1); }
  else { openCourses.push(courseTitle); }
  setState('openSidebarCourses', openCourses);
}

// 恢复侧边栏折叠状态
function restoreSidebarState() {
  var openCourses = getState('openSidebarCourses', []);
  var headers = document.querySelectorAll('.sidebar .course-header');
  for (var i = 0; i < headers.length; i++) {
    var h = headers[i];
    var title = h.querySelector('span').textContent.trim();
    if (openCourses.indexOf(title) > -1) {
      h.classList.add('open');
      h.nextElementSibling.classList.add('open');
    }
  }
}
// 在 renderSidebar 调用后恢复
var origRenderSidebar = renderSidebar;
renderSidebar = function(course, chapter) {
  origRenderSidebar(course, chapter);
  setTimeout(restoreSidebarState, 100);
};
"""

# 找到 setupMobile 函数的结束位置并插入新代码
insert_point = """  var pageName = document.body.dataset.page;
  if (pageName) {
    var links = document.querySelectorAll('.nav-links a');
    for (var i = 0; i < links.length; i++) {
      if (links[i].dataset.page === pageName) links[i].classList.add('active');
    }
  }
}"""

new_insert = insert_point + new_funcs
common = common.replace(insert_point, new_insert)

with open(BASE + '/common.js', 'w', encoding='utf-8') as f:
    f.write(common)
print('OK: Back-to-top, copy code, sidebar state added to common.js')


# ===== 3. 更新 style.css 添加返回顶部和复制按钮样式 =====
with open(BASE + '/style.css', 'r', encoding='utf-8') as f:
    style = f.read()

new_styles = """
/* ==================== 返回顶部按钮 ==================== */
#backToTop {
  position: fixed; bottom: 80px; right: 20px; z-index: 200;
  width: 40px; height: 40px; background: var(--primary); color: #fff;
  border: none; border-radius: 50%; font-size: 20px; cursor: pointer;
  box-shadow: var(--shadow-md); opacity: 0; transform: translateY(20px);
  transition: all 0.3s ease; pointer-events: none;
}
#backToTop.show { opacity: 1; transform: translateY(0); pointer-events: auto; }
#backToTop:hover { background: var(--primary-dark); transform: scale(1.1); }

/* ==================== 复制代码按钮 ==================== */
.copy-code-btn {
  position: absolute; top: 8px; right: 8px;
  padding: 4px 10px; background: rgba(255,255,255,0.15); color: #e2e8f0;
  border: 1px solid rgba(255,255,255,0.2); border-radius: 4px;
  font-size: 11px; cursor: pointer; transition: all 0.2s;
}
.copy-code-btn:hover { background: rgba(255,255,255,0.25); }

.code-editor-wrap { position: relative; }

/* ==================== 补充动画 ==================== */
.course-card { animation: fadeIn 0.4s ease both; }
.course-card:nth-child(2) { animation-delay: 0.1s; }
.course-card:nth-child(3) { animation-delay: 0.2s; }
.course-card:nth-child(4) { animation-delay: 0.3s; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
"""

style += new_styles

with open(BASE + '/style.css', 'w', encoding='utf-8') as f:
    f.write(style)
print('OK: Back-to-top and copy button styles added')


# ===== 4. 更新 learning.html 添加复制按钮 =====
with open(BASE + '/learning.html', 'r', encoding='utf-8') as f:
    learning = f.read()

old_code_block = """<div class="code-editor-wrap"><textarea readonly class="code-display" style="overflow:visible;resize:none;">"""

new_code_block = """<div class="code-editor-wrap"><button class="copy-code-btn" onclick="copyCode(this)">📋 复制代码</button><textarea readonly class="code-display" style="overflow:visible;resize:none;">"""

learning = learning.replace(old_code_block, new_code_block)

with open(BASE + '/learning.html', 'w', encoding='utf-8') as f:
    f.write(learning)
print('OK: Copy button added to learning.html code blocks')

print('\nAll optimizations complete!')
