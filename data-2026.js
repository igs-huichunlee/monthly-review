/**
 * 2026 月度與年度工作復盤數據庫 (靜態 Centralized Data Store)
 */

window.REVIEW_DATA_2026 = {
  year: 2026,
  activeMonth: "10", // 自動切換至最新 10 月

  // 工作分類設定
  categories: {
    role:      { label: '角色製作 / 骨架拆圖', color: '#4f8ef7', icon: '🎨' },
    ai:        { label: 'AI 工具研究與落地',  color: '#a78bfa', icon: '🤖' },
    tool:      { label: '工作流與小工具開發',  color: '#22d3ee', icon: '🛠️' },
    coop:      { label: '跨單位溝通與會議',    color: '#34d399', icon: '💬' },
    doc:       { label: '報告 / 簡報 / 歸檔',   color: '#fbbf24', icon: '📑' },
    outsource: { label: '外包審核與點收',      color: '#f87171', icon: '📦' },
    other:     { label: '其他雜項支援',        color: '#94a3b8', icon: '📌' }
  },

  // 各月份詳細數據
  months: {
    "01": {
      monthId: "01",
      monthName: "1月",
      title: "2026年1月度工作復盤報告",
      dateRange: "1/2 – 1/29",
      workdays: 19,
      overtime: 25.0,
      tasksCount: 114,
      aiTasksCount: 4,
      roleTasksCount: 9,
      roleProjectsList: "包含：賽特/賽特1000/賽特2、招財童子、呂布、貂蟬、童子、辣椒2、男孩、煙火巨魔、技能炮",
      vacationDays: 0,
      typhoonDays: 0,

      catCount: {
        role: 45,
        ai: 4,
        tool: 6,
        coop: 14,
        doc: 17,
        outsource: 28
      },

      weeklyAiTrend: [1, 2, 0, 1],
      weeklyOvertime: [6, 7, 6, 6],
      radarData: [90, 60, 75, 78, 80, 95],
      typhoonDaysList: [],

      strengths: [
        { icon: "📦", title: "外包管理與結案發包高峰", desc: "1月全面推進外包 E 化、結案文件製作與合約續簽，完成火蟻（呂布）、云像（貂蟬）角色結單，並落實賽特2、貂蟬動態、賽特1000發包。" },
        { icon: "🎨", title: "重點專案與角色並行攻堅", desc: "高效推進賽特/賽特2 (2D靜態圖、符號、背景框體)、招財童子 (Spine調整、Matcap、金幣序列圖)、呂布與貂蟬 Shader/Normal/動態回檔調校。" },
        { icon: "🛠️", title: "製程工具與 3D 流程探索", desc: "測試 JR3D 工具、三國攝影機鏡頭測試、驗證童子 Spine 與資安加密流程，穩定支撐研發與美術輸出。" }
      ],

      problems: [
        { icon: "🔄", title: "角色動態回檔與反饋頻繁", desc: "呂布與貂蟬多次出現「回檔→反饋→攝影機調校」循環，前期規格與外包對齊成本較高。" },
        { icon: "🐛", title: "跨專案臨時異常排查", desc: "童子 3D 異常 (繩子與桶轉動 BUG) 需配合 1/28 上線節奏緊急修復排查。" }
      ],

      improvements: [
        { icon: "📋", title: "外包教學與驗收 SOP 標準化", desc: "持續普及 1 月產出的外包教學，精準對齊攝影機鏡頭與命名規範，降低回檔輪次。" },
        { icon: "🤖", title: "推動 3D 與 AI 自動化結合", desc: "深化 AI+3D 會議結論，探索工具化輔助序列圖與貼圖處理，縮短手動調校工時。" }
      ],

      dailyData: [
        { date: "1/2", day: "五", isHoliday: false, tasks: ["更新canva", "和外包對招財童子反饋", "開部會", "發包文件-貂蟬動態", "整理煙火巨魔+童子的3D給小宇老師拍圖", "賽特1000外包文件製作"], cats: ["doc", "outsource", "coop", "outsource", "role", "doc"] },
        { date: "1/5", day: "一", isHoliday: false, tasks: ["外包相關文件處裡", "賽特1000外包文件製作", "呂布動態回檔+反饋", "競業分析報告"], cats: ["doc", "doc", "outsource", "doc"] },
        { date: "1/6", day: "二", isHoliday: false, tasks: ["競業分析報告", "外包溝通製作", "呂布+貂蟬動態反饋+鏡頭更新", "回呂布外包", "外包教學製作", "更新線上事業處表單"], cats: ["doc", "outsource", "outsource", "outsource", "doc", "doc"] },
        { date: "1/7", day: "三", isHoliday: false, tasks: ["討論工項", "外包簽核(貂蟬動態發包/賽特2外包)", "合約續簽(許大/一書)", "月備份", "驗童子spine", "呂布回檔+反饋"], cats: ["coop", "outsource", "doc", "doc", "role", "outsource"] },
        { date: "1/8", day: "四", isHoliday: false, tasks: ["貂蟬回檔", "技能炮_討論做法", "出FBX給同事", "測貂蟬+呂布攝影機"], cats: ["outsource", "coop", "role", "tool"] },
        { date: "1/9", day: "五", isHoliday: false, tasks: ["測貂蟬+呂布攝影機", "部會", "分享會"], cats: ["tool", "coop", "coop"] },
        { date: "1/12", day: "一", isHoliday: false, tasks: ["三國攝影機測試", "外包合約處裡", "呂布回檔", "AI+3D報告", "和阿偉對工作", "呂布錄影更新", "AI+3D會議", "印許大的單", "簽外包合約", "呂布反饋製作", "技能炮微調+動態_提供暫代", "改報告優化"], cats: ["tool", "doc", "outsource", "ai", "coop", "doc", "ai", "doc", "doc", "outsource", "role", "doc"] },
        { date: "1/13", day: "二", isHoliday: false, tasks: ["改報告優化", "訂飲料", "賽特2回檔+輸出", "製作賽特2改直線", "E化會議", "美術會議", "呂布回檔+出給程式串"], cats: ["doc", "other", "role", "role", "coop", "coop", "outsource"] },
        { date: "1/14", day: "三", isHoliday: false, tasks: ["測試外包E-化", "賽特2反饋", "貂蟬回檔", "呂布回檔", "賽特2D提供程式一版", "貂蟬+呂布反饋", "童子3D異常/(繩子BUG+桶亂轉)1/28上線"], cats: ["doc", "outsource", "outsource", "outsource", "role", "outsource", "role"] },
        { date: "1/16", day: "五", isHoliday: false, tasks: ["更新簡報錄影", "開部會", "賽特2更新回檔給程式", "貂蟬回檔", "貂蟬反饋製做", "錄簡報影片"], cats: ["doc", "coop", "role", "outsource", "outsource", "doc"] },
        { date: "1/19", day: "一", isHoliday: false, tasks: ["招財童子-json優化童子金幣", "貂蟬回檔", "貂蟬反饋", "更新動畫課文件", "印外包文件", "招財童子-json優化童子金幣", "呂布回檔", "外包文件簽核", "呂布改檔名Lubu(模型+貼圖+確認攝影機bone)", "呂布回檔", "招財童子-json優化童子金幣", "調呂布normal"], cats: ["role", "outsource", "outsource", "doc", "doc", "role", "outsource", "doc", "role", "outsource", "role", "role"] },
        { date: "1/20", day: "二", isHoliday: false, tasks: ["討論工項", "呂布鎧甲用簡易normal+matcap", "招財童子金幣序列圖製做", "刪除有個資的信", "呂布動態反饋", "貂蟬提供程式串接檔", "提供菘瑋呂布的shader", "貂蟬+呂布3D結案文件製作", "整理外包E-mail", "招財童子金幣序列圖製做"], cats: ["coop", "role", "role", "doc", "outsource", "role", "role", "doc", "doc", "role"] },
        { date: "1/21", day: "三", isHoliday: false, tasks: ["招財童子金幣序列圖製做", "測JR3D工具", "和阿偉對工作", "招財童子spine調整"], cats: ["role", "tool", "coop", "role"] },
        { date: "1/22", day: "四", isHoliday: false, tasks: ["招財童子spine調整", "調招財童子matcap", "賽特缺少SFG的背景和框體", "招財童子_matcap", "討論貂蟬工項", "拍招財童子圖", "招財童子_matcap", "貂蟬3D角色云像結單", "呂布3D角色火蟻結單", "許大/一書合約延展"], cats: ["role", "role", "role", "role", "coop", "role", "role", "outsource", "outsource", "doc"] },
        { date: "1/23", day: "五", isHoliday: false, tasks: ["招財童子_matcap打包+提供", "工項討論", "外包單整理", "更新canva", "特效發包-貂蟬"], cats: ["role", "coop", "doc", "doc", "outsource"] },
        { date: "1/26", day: "一", isHoliday: false, tasks: ["特效發包-貂蟬", "賽特2符號缺少消除動畫", "童子調色", "特效發包-貂蟬", "動態貂蟬回檔"], cats: ["outsource", "role", "role", "outsource", "outsource"] },
        { date: "1/27", day: "二", isHoliday: false, tasks: ["2D遊戲寶相圖", "呂布動態回檔", "提供同事呂布檔案+討論工項", "錄童子影片", "和小楊討論特效(琵琶掉落+討伐董卓)", "呂布動態回檔", "呂布+貂蟬動態反饋", "2D賽特靜態圖", "特效發包-男孩(取消)", "特效發包-貂蟬", "2D賽特靜態圖", "辣椒2外包文件製作", "整理C槽", "2D賽特靜態圖"], cats: ["role", "outsource", "coop", "role", "coop", "outsource", "outsource", "role", "outsource", "outsource", "role", "doc", "doc", "role"] },
        { date: "1/28", day: "三", isHoliday: false, tasks: ["2D賽特靜態圖", "練習資安加密", "電腦設備重裝", "特效外包問題回復", "外包接洽", "2D賽特靜態圖"], cats: ["role", "doc", "other", "outsource", "outsource", "role"] },
        { date: "1/29", day: "四", isHoliday: false, tasks: ["canva更新", "2D賽特靜態圖", "2D遊戲紅包圖"], cats: ["doc", "role", "role"] }
      ]
    },

    "02": {
      monthId: "02",
      monthName: "2月",
      title: "2026年2月度工作復盤報告",
      dateRange: "2/2 – 2/26",
      workdays: 14,
      overtime: 21.0,
      tasksCount: 75,
      aiTasksCount: 0,
      roleTasksCount: 9,
      roleProjectsList: "包含：貂蟬、呂布、辣椒2、技能炮、賽特2、LINE貼圖、Q財神、龍3炮台/綠炮、無限轉輪、淘氣鯊、關羽",
      vacationDays: 0,
      typhoonDays: 0,

      catCount: {
        role: 36,
        ai: 0,
        tool: 2,
        coop: 16,
        doc: 8,
        outsource: 13
      },

      weeklyAiTrend: [0, 0, 0, 0],
      weeklyOvertime: [5.5, 5, 5, 5.5],
      radarData: [92, 50, 72, 80, 75, 85],
      typhoonDaysList: [],

      strengths: [
        { icon: "🎨", title: "多專案 3D/2D 資源密集調校與輸出", desc: "高密度推進貂蟬 (表情、服裝調色、Shader、特效交接)、呂布 (3D BUG 修正、Normal/Matcap 優化、貼圖壓縮)、技能炮 (Shader、骨架新增、動畫) 與 LINE 貼圖繪製。" },
        { icon: "🚀", title: "全新專案預研與技術驗證", desc: "深入了解並展開《無限轉輪》專案測試檔製作，完成《龍3》炮台減幀 FBX 與《淘氣鯊》普魚輸出，以及關羽表演動態討論。" },
        { icon: "📦", title: "跨專案外包與素材打包流暢對接", desc: "落實《辣椒2》外包文件撰寫 (100%)、發包討論、素材打包與反饋，並完成貂蟬動態/特效回檔驗收與程式串接效能測試。" }
      ],

      problems: [
        { icon: "⚡", title: "專案 BUG 與臨時修改集中", desc: "賽特2 (文字偏移、Reel 框更換、Scatter 動畫)、技能炮天空 BUG 與呂布貼圖尺寸更換，修復耗費較多反覆驗證時間。" },
        { icon: "📅", title: "春節月份工作天數集中且緊湊", desc: "2 月因春節連假實際工作日僅 14 天，任務高度濃縮於上下半旬，需高強度切換專案節奏。" }
      ],

      improvements: [
        { icon: "📋", title: "落實外包流程與資產 Checklist", desc: "持續普及 2 月撰寫的外包流程規範，嚴格把關動態與 Shader 交付標準，縮短重複調色與修 BUG 工時。" },
        { icon: "🔄", title: "深化新專案 (無限轉輪/龍3) 製程標準", desc: "針對減幀驗證與新玩法 (無限轉輪) 提早建立模組化範本，提升後續量產效率。" }
      ],

      dailyData: [
        { date: "2/2", day: "一", isHoliday: false, tasks: ["討論工項", "辣椒2反饋", "呂布回檔驗證", "呂布出給程式更新", "貂蟬動態回檔+反饋", "貂蟬特效驗證+反饋", "技能炮動態+無人機尺寸調整(有BUG)", "討論工項"], cats: ["coop", "outsource", "outsource", "role", "outsource", "outsource", "role", "coop"] },
        { date: "2/3", day: "二", isHoliday: false, tasks: ["辣椒2文件撰寫", "工項討論", "6張LINE宣傳_75%"], cats: ["doc", "coop", "role"] },
        { date: "2/4", day: "三", isHoliday: false, tasks: ["辣椒2文件撰寫_80%", "呂布動態更新", "6張LINE宣傳_100%", "辣椒2文件撰寫_100%", "寄發票信117.風暴賽特2-阿妮亞", "討論技能炮動態", "辣椒2發包+優化討論", "技能炮shader製作+提供", "技能炮動畫調整"], cats: ["doc", "role", "role", "doc", "doc", "coop", "outsource", "role", "role"] },
        { date: "2/5", day: "四", isHoliday: false, tasks: ["貂蟬動態回檔,提供程式串接", "貂蟬特效回檔", "寫外包流程", "辣椒2反饋", "貂蟬特效反饋", "特效串接+提供程式(測效能)", "呂布3DBUG修正+錄影", "月輩分", "呂布和程式討論BUG", "技能炮天空BUG"], cats: ["role", "outsource", "doc", "outsource", "outsource", "role", "role", "doc", "coop", "role"] },
        { date: "2/6", day: "五", isHoliday: false, tasks: ["討論工項", "部會", "技能炮微調貼圖+新增bone", "提供呂布+貂蟬動態反饋", "呂布拆2個給菘瑋", "開魚機技術會", "更新canva", "辣椒2素材打包"], cats: ["coop", "coop", "role", "outsource", "role", "coop", "doc", "outsource"] },
        { date: "2/9", day: "一", isHoliday: false, tasks: ["呂布BUG排除", "呂布normal+matcap優化+ingame微調", "辣椒2素材打包給外包", "line貼圖*8"], cats: ["role", "role", "outsource", "role"] },
        { date: "2/10", day: "二", isHoliday: false, tasks: ["E化會議", "辣椒2外包問題回覆", "切圖更新", "貂蟬動態回檔", "辣椒2更新小楊的切圖給企劃", "linw貼圖*8"], cats: ["coop", "outsource", "role", "outsource", "coop", "role"] },
        { date: "2/11", day: "三", isHoliday: false, tasks: ["linw貼圖*8", "賽特2BUG(字歪/框更換/動畫調整)"], cats: ["role", "role"] },
        { date: "2/12", day: "四", isHoliday: false, tasks: ["linw貼圖優化_4張", "更新canva"], cats: ["role", "doc"] },
        { date: "2/13", day: "五", isHoliday: false, tasks: ["年度目標製作", "開部會", "檔案歸檔公電"], cats: ["doc", "coop", "doc"] },
        { date: "2/23", day: "一", isHoliday: false, tasks: ["貂蟬特效外包申請(交接給紅茶)", "貂蟬表情製作"], cats: ["outsource", "role"] },
        { date: "2/24", day: "二", isHoliday: false, tasks: ["貂蟬表情製作", "貂蟬服裝調色", "無限轉輪專案了解"], cats: ["role", "role", "role"] },
        { date: "2/25", day: "三", isHoliday: false, tasks: ["貂蟬服裝調色", "無限轉輪專案了解", "貂蟬特效/呂布壓縮/工項討論", "貂蟬shader製作", "Q財神套shader", "龍3綠炮重出FBX", "關羽表演討論"], cats: ["role", "role", "coop", "role", "role", "role", "coop"] },
        { date: "2/26", day: "四", isHoliday: false, tasks: ["龍3炮台出FBX驗減幀", "討論無限轉輪", "製作無限轉輪測試檔", "淘氣鯊出FBX_普魚", "關羽表演討論", "討論貂蟬表演", "淘氣鯊出FBX", "貂蟬調色+shader"], cats: ["tool", "coop", "tool", "role", "coop", "coop", "role", "role"] }
      ]
    },

    "07": {
      monthId: "07",
      monthName: "7月",
      title: "2026年7月度工作復盤報告",
      dateRange: "7/1 – 7/31",
      workdays: 17,
      overtime: 27.5,
      tasksCount: 90,
      aiTasksCount: 12,
      roleTasksCount: 11,
      roleProjectsList: "包含：關羽、貂蟬、孫悟空、大富翁、齊天財神、小兵、黃帝、滿貫大爺、骰子、殭屍、那迦",
      vacationDays: 0,
      typhoonDays: 1,

      catCount: {
        role: 22,
        ai: 12,
        tool: 18,
        coop: 15,
        doc: 13,
        outsource: 10
      },

      weeklyAiTrend: [1, 3, 1, 6],
      weeklyOvertime: [5, 9, 5.5, 8],
      radarData: [90, 78, 72, 65, 62, 55],
      typhoonDaysList: [24],

      strengths: [
        { icon: "🤖", title: "AI 工具持續投入", desc: "7月全月持續研究 AI 工具，整合進 JR3DVIEW 文件、開發文字工具、測試 Claude MCP，技術學習主動性強。" },
        { icon: "🎨", title: "多角色並行推進", desc: "同時推進關羽、那迦/納珈、貂蟬、皇帝手、龍3、孫悟空等角色，任務切換能力強，能有效管理複數專案。" },
        { icon: "🔧", title: "工具建設貢獻", desc: "持續優化 spine 比較工具、AB 檢查工具、文字 AI 工具，並製作教學，對團隊工作效率有實質貢獻。" },
        { icon: "📤", title: "對外協作積極", desc: "獨立提供素材給程式串接、外包結案管理、跨部門協作（靈貓、家緯、昭仁），溝通與交付能力完整。" }
      ],

      problems: [
        { icon: "⚡", title: "任務碎片化嚴重", desc: "許多工作日有 8–12 項任務，類型跨度大（角色調整 → 開會 → AI 研究 → 外包管理），高度碎片化影響深度工作效率。" },
        { icon: "🔄", title: "重工與反覆修改頻繁", desc: "關羽、那迦等角色多次出現「回檔→反饋→再修改」循環，建議檢討驗收標準或前期對齊流程是否足夠清晰。" }
      ],

      improvements: [
        { icon: "📋", title: "建立日報習慣", desc: "每日結束時花 5 分鐘記錄所有任務，確保月末復盤數據完整，也便於自我追蹤與工時申報。" },
        { icon: "🎯", title: "採用「主題日」規劃", desc: "每天指定 1-2 個主要任務（角色調整日 / 工具日 / AI 研究日），減少碎片切換，提升深度工作品質。" },
        { icon: "📊", title: "角色驗收 Checklist 標準化", desc: "針對關羽、那迦等反覆回檔問題，制定明確的驗收 SOP，減少多輪修改，降低無效工時。" },
        { icon: "⚖️", title: "彈性調配加班時數", desc: "本月加班 27.5H 遠超規定的 20H，多出的 7.5H 可規劃為技術研究或工具開發，確保投入產出比最大化。" }
      ],

      dailyData: [
        { date: "7/1", day: "三", isHoliday: false, tasks: ["討論工作", "驗貂蟬動態組件製作", "驗貂蟬+關羽測試AI點陣參考", "軟體反饋"], cats: ["coop", "role", "ai", "coop"] },
        { date: "7/2", day: "四", isHoliday: false, tasks: ["討論工作-大富翁修訂", "更新角色spine", "專案給家緯/驗收", "更新大富翁特效刷圖", "驗工作齊天財神檔名", "備份大富翁專案", "同事交流工具使用", "驗收關羽動態檔", "小兵模型+key動作", "更新canva", "備份", "驗spine比對工具"], cats: ["coop", "role", "role", "role", "role", "doc", "coop", "role", "role", "doc", "doc", "tool"] },
        { date: "7/6", day: "一", isHoliday: false, tasks: ["約週檢", "電腦資料備份斷電", "討論工作", "維護修改AI工具", "驗黃帝專案檔", "驗關羽動態檔", "整理工作反饋", "測claude mcp+滿貫大爺專案檔"], cats: ["coop", "doc", "coop", "tool", "role", "role", "coop", "ai"] },
        { date: "7/7", day: "二", isHoliday: false, tasks: ["測claude mcp+滿貫大爺專案檔", "整理專案檔", "檢查外包結案資料", "追蹤孫悟空動畫表現", "驗貂蟬專案檔", "貂蟬調整原點位置", "美術部會", "關羽專案檔檔"], cats: ["ai", "doc", "outsource", "role", "role", "role", "coop", "role"] },
        { date: "7/8", day: "三", isHoliday: false, tasks: ["外包E結案", "貂蟬點收+ingame確認"], cats: ["outsource", "role"] },
        { date: "7/9", day: "四", isHoliday: false, tasks: ["render骰子動畫", "關羽專案檔驗收檔", "測+調整專案檔", "render骰子動畫_2~6", "關羽動態檔給程式端", "關羽idle動態檔", "骰子轉檔檔", "關羽動態檔+影子"], cats: ["role", "role", "role", "role", "role", "role", "role", "role"] },
        { date: "7/13", day: "一", isHoliday: false, tasks: ["驗貓詢專案合併流程", "確認外包流程", "驗AB檢查工具", "更新貂蟬idle短動態給程式", "報告製作-競品介紹_皮克敏", "微調+更新關羽貼圖給程式"], cats: ["role", "outsource", "tool", "role", "doc", "role"] },
        { date: "7/14", day: "二", isHoliday: false, tasks: ["確認驗收貂蟬專案檔", "整理關羽SHADER給程式串接", "測試美術文字排版包裝工作流", "關羽龍吼動態改大"], cats: ["role", "role", "ai", "role"] },
        { date: "7/15", day: "三", isHoliday: false, tasks: ["外包組件結案", "調整關羽動態檔shader"], cats: ["outsource", "role"] },
        { date: "7/16", day: "四", isHoliday: false, tasks: ["調整關羽shader", "討論關羽Nearwin", "更新簡報"], cats: ["role", "coop", "doc"] },
        { date: "7/17", day: "五", isHoliday: false, tasks: ["調整關羽貼圖", "討論關羽Nearwin", "調整大富翁軟體特效", "驗殭屍專案_相機", "整理關羽歸檔", "研究AI"], cats: ["role", "coop", "role", "role", "doc", "ai"] },
        { date: "7/24", day: "五", isHoliday: true, isTyphoon: true, tasks: ["🌀 凱米颱風假"], cats: ["other"] },
        { date: "7/27", day: "一", isHoliday: false, tasks: ["換皮專案討論", "研究AI(工具寫進JR3DVIEW)", "修那迦"], cats: ["coop", "ai", "role"] },
        { date: "7/28", day: "二", isHoliday: false, tasks: ["製作週報簡報", "研究AI(工具寫進JR3DVIEW)", "修那迦"], cats: ["doc", "ai", "role"] },
        { date: "7/29", day: "三", isHoliday: false, tasks: ["製作週報簡報", "研究AI(工具寫進JR3DVIEW)", "修那迦", "納迦歸檔+專案資料夾結構", "驗孫悟空驗spine檔"], cats: ["doc", "ai", "role", "doc", "role"] },
        { date: "7/30", day: "四", isHoliday: false, tasks: ["研一孫悟空-驗spine檔", "spine檔工具修正說明教學", "納迦整理給程式串接", "測試文字工具", "討論工作", "更新canva", "動畫skill寫顧問反饋檔"], cats: ["role", "tool", "role", "tool", "coop", "doc", "ai"] },
        { date: "7/31", day: "五", isHoliday: false, tasks: ["改AI工具", "更新整理簡報", "開部會+報告", "美術部會", "改關羽spine"], cats: ["ai", "doc", "coop", "coop", "role"] }
      ]
    },

    "08": {
      monthId: "08",
      monthName: "8月",
      title: "2026年8月度工作復盤報告",
      dateRange: "8/3 – 8/31",
      workdays: 20,
      overtime: 34.0,
      tasksCount: 99,
      aiTasksCount: 21,
      roleTasksCount: 14,
      roleProjectsList: "包含：關羽、貂蟬、皇帝手、孫悟空、大富翁、納珈、獅子魚、珍珠貝、淘氣鯊、獵龍3、彩金捕魚、小綠魚、魚X小魚、水晶鱷魚",
      vacationDays: 0,
      typhoonDays: 0,

      catCount: {
        role: 42,
        ai: 21,
        tool: 6,
        coop: 16,
        doc: 8,
        outsource: 6
      },

      weeklyAiTrend: [3, 7, 5, 6],
      weeklyOvertime: [9, 8, 8, 9],
      radarData: [92, 85, 78, 70, 68, 62],
      typhoonDaysList: [],

      strengths: [
        { icon: "🤖", title: "AI 多語系與 Skill 爆發", desc: "8月成功研發文字多語系 Skill、3D 貼圖修整 Skill、Blender 串接 MCP 技術與 LLM Wiki 製作規劃，AI 技術全面落地。" },
        { icon: "🎨", title: "14 項不重複角色專案推進", desc: "高效率完成 14 個不重複獨立角色與圖素專案包含：關羽、貂蟬、皇帝手、孫悟空、大富翁、納珈、獅子魚、珍珠貝、淘氣鯊、獵龍3、彩金捕魚、小綠魚、魚X小魚、水晶鱷魚。" },
        { icon: "📦", title: "外包流程與結案標準化", desc: "完成靈貓（關羽*2+龍3貂蟬）、智樂堂（皇帝手）結案文件與外包流程教學製作，跨單位對齊更順暢。" },
        { icon: "🔧", title: "工具鏈升級與修復", desc: "修復 AB 比對工具、驗證壓縮容量工具、測試 MAX 合併工具與序列圖處理工具製作。" }
      ],

      problems: [
        { icon: "🐛", title: "專案 BUG 與資源回檔頻繁", desc: "孫悟空 Spine 與 Loading 頁切圖多次出現 BUG 及回檔反饋，耗費較多重複檢查時間。" },
        { icon: "⚡", title: "多語系需求集中爆發", desc: "彩金捕魚、淘氣鯊、獵龍3 等多個專案同時湧入多語系需求，排程需更嚴密控管。" }
      ],

      improvements: [
        { icon: "🛠️", title: "推動自動化多語系工具", desc: "繼續優化多語系與序列圖處理工具，減少人工手動切圖與導圖時間。" },
        { icon: "📋", title: "普及外包教學與 SOP", desc: "將 8 月製作的外包教學推廣給團隊，減少點收時的規格退回率。" }
      ],

      dailyData: [
        { date: "8/3", day: "一", isHoliday: false, tasks: ["改關羽spine", "提供spine給程式更新", "外包結案(靈貓-關羽*2+龍3貂蟬/智樂堂-皇帝手)", "架構AI報告大綱", "外包結案教學製作", "驗關羽效果", "討論工項", "改關羽spine", "改關羽NearWin掉落參數", "關羽整體效果確認", "協助研4驗壞檔", "測試JR3D+MCP製作擾動shader", "孫悟空2D切圖"], cats: ["role", "role", "outsource", "ai", "doc", "role", "coop", "role", "role", "role", "coop", "ai", "role"] },
        { date: "8/4", day: "二", isHoliday: false, tasks: ["孫悟空2D切圖", "討論孫悟空相關工項", "整理三國外包金額做成表格", "改關羽spine", "孫悟空spine回檔檢查", "美術會議", "孫悟空spine回檔檢查/修正AB比對工具/盤點孫悟空缺檔內容"], cats: ["role", "coop", "doc", "role", "outsource", "coop", "tool"] },
        { date: "8/5", day: "三", isHoliday: false, tasks: ["孫悟空2D壓縮上傳", "檢查孫悟空spine相關資源", "孫悟空spine反饋製作"], cats: ["role", "role", "outsource"] },
        { date: "8/6", day: "四", isHoliday: false, tasks: ["外包結案文件製作", "外包流程教學製作", "文件備份", "修改大富翁BUG", "提供貂蟬製作檔打包", "修大富翁BUG", "孫悟空回檔+反饋", "更新canve", "找孫悟空BUG"], cats: ["doc", "doc", "doc", "role", "role", "role", "outsource", "doc", "role"] },
        { date: "8/7", day: "五", isHoliday: false, tasks: ["找孫悟空BUG", "部會", "和同事討論外包問題", "修正孫悟空BUG上傳GIT", "外包結案文件整理(靈貓-關羽*2+龍3貂蟬/智樂堂-皇帝手)"], cats: ["role", "coop", "coop", "role", "outsource"] },
        { date: "8/10", day: "一", isHoliday: false, tasks: ["和外包對孫悟空物件", "MAX合併工具測試", "製作納珈貝殼貼圖"], cats: ["outsource", "tool", "role"] },
        { date: "8/11", day: "二", isHoliday: false, tasks: ["外包簽核", "重出關羽", "和程式驗證壓縮容量工具", "驗孫悟空spine", "修正孫悟空BUG"], cats: ["outsource", "role", "tool", "role", "role"] },
        { date: "8/12", day: "三", isHoliday: false, tasks: ["修正孫悟空BUG+上傳素材", "孫悟空loding頁切圖"], cats: ["role", "role"] },
        { date: "8/13", day: "四", isHoliday: false, tasks: ["孫悟空loding頁切圖+上傳素材", "貝殼貼圖優化", "優化文字AI工具skill", "製作3D貼圖修整skill", "製作Ai agent報告"], cats: ["role", "role", "ai", "ai", "ai"] },
        { date: "8/17", day: "一", isHoliday: false, tasks: ["貝殼貼圖優化", "AI小助理會議", "討論包體優化", "製作AI報告"], cats: ["role", "coop", "coop", "ai"] },
        { date: "8/18", day: "二", isHoliday: false, tasks: ["製作AI報告", "貝殼貼圖優化", "美術會議"], cats: ["ai", "role", "coop"] },
        { date: "8/19", day: "三", isHoliday: false, tasks: ["獅子魚算AI游動影片", "珍珠貝序列圖製作", "blender串MCP製成研究"], cats: ["ai", "role", "ai"] },
        { date: "8/20", day: "四", isHoliday: false, tasks: ["獅子魚序列圖製作", "序列圖處裡工具製作", "文字多語系skill製作", "淘氣鯊+獵龍3LOGO多語系製做", "更新ceanv"], cats: ["role", "tool", "ai", "role", "doc"] },
        { date: "8/21", day: "五", isHoliday: false, tasks: ["文字多語系skill製作", "淘氣鯊+獵龍3LOGO多語系製做", "開研二AI會議", "彩金捕魚多語系"], cats: ["ai", "role", "coop", "role"] },
        { date: "8/24", day: "一", isHoliday: false, tasks: ["彩金捕魚多語系", "3D會議+簡報更新", "文字多語系skill製作", "小綠魚序列圖製作"], cats: ["role", "coop", "ai", "role"] },
        { date: "8/25", day: "二", isHoliday: false, tasks: ["彩金捕魚多語系", "美術工具同步會議", "AI工具盤點", "優化多語系工具"], cats: ["role", "coop", "ai", "tool"] },
        { date: "8/26", day: "三", isHoliday: false, tasks: ["AI工具會議", "製作AI報告", "討論文字SKILL擴充", "魚X小魚序列圖優化"], cats: ["coop", "ai", "ai", "role"] },
        { date: "8/27", day: "四", isHoliday: false, tasks: ["AI工具會議", "研究ArtWiki", "魚X序列圖魚優化", "更新canva", "討論工項"], cats: ["coop", "ai", "role", "doc", "coop"] },
        { date: "8/28", day: "五", isHoliday: false, tasks: ["AI會議", "LLMwiki製做討論", "討論小魚優化", "美術部會", "水晶鱷魚UI滾分板製作"], cats: ["coop", "ai", "coop", "coop", "role"] },
        { date: "8/31", day: "一", isHoliday: false, tasks: ["LLMwiki製做規劃", "水晶鱷魚UI滾分板製作", "核對納珈工項", "納珈shader製作", "線上AI工具盤點報告"], cats: ["ai", "role", "coop", "role", "ai"] }
      ]
    },

    "09": {
      monthId: "09",
      monthName: "9月",
      title: "2026年9月度工作復盤報告",
      dateRange: "9/1 – 9/30",
      workdays: 20,
      overtime: 26.5,
      tasksCount: 125,
      aiTasksCount: 38,
      roleTasksCount: 9,
      roleProjectsList: "包含：納珈/人魚、魚X/小魚、龍3關羽、太陽神、野牛、大富翁、呂布、惡魔之火、烈焰神龍",
      vacationDays: 0,
      typhoonDays: 0,

      catCount: {
        role: 26,
        ai: 38,
        tool: 5,
        coop: 31,
        doc: 20,
        outsource: 5
      },

      weeklyAiTrend: [7, 11, 10, 10],
      weeklyOvertime: [6.5, 7, 6.5, 6.5],
      radarData: [88, 95, 80, 85, 82, 75],
      typhoonDaysList: [],

      strengths: [
        { icon: "🧠", title: "企業知識庫重構與 Agent 化", desc: "9月全面重構 AI 知識庫、盤點線上 AI 工具、製作 LLM Wiki 報告，並引導團隊成員熟悉知識庫共筆流程。" },
        { icon: "🐲", title: "AI 遊戲研發與版面拼板爆發", desc: "運用 AI 高效完成《烈焰神龍》2D 拼板與外包文件，並深度推進《惡魔之火》換皮風格與資源整理。" },
        { icon: "☀️", title: "跨專案與外包合約高效推進", desc: "使用 Pixi 完成《太陽神》Symbol 製作，並穩定推進《龍3關羽》、《人魚》與《阿尼亞》外包簽核與發包申請。" }
      ],

      problems: [
        { icon: "📄", title: "外包與合約行政流程繁瑣", desc: "9 月包含阿尼亞、關羽、人魚等多項外包與續約合約洽談，佔用較多對外行政與對齊時間。" }
      ],

      improvements: [
        { icon: "🚀", title: "深化知識庫自動化範本", desc: "持續擴充 Agent 知識庫 SOP，減少重複性發包與外包文件手動填寫時間。" },
        { icon: "🛠️", title: "標準化 Pixi 與 AI 工具鏈", desc: "將 Pixi Symbol 製作與 2D 拼板工具封裝為標準 Skill，提升新專案上線速度。" }
      ],

      dailyData: [
        { date: "9/1", day: "二", isHoliday: false, tasks: ["討論工項", "線上AI工具盤點報告製作", "討論F1優化項目", "阿妮亞續約確認", "LLMwiki報告製作", "美術會議", "線上AI工具盤點報告製作"], cats: ["coop", "ai", "coop", "doc", "ai", "coop", "ai"] },
        { date: "9/2", day: "三", isHoliday: false, tasks: ["人魚發包文件製作", "優化納珈", "codex整理盤點"], cats: ["doc", "role", "ai"] },
        { date: "9/3", day: "四", isHoliday: false, tasks: ["優化納珈", "討論工項", "盤點claude工具", "外包續約合約處裡"], cats: ["role", "coop", "ai", "doc"] },
        { date: "9/4", day: "五", isHoliday: false, tasks: ["更新canva", "和孟孟預演+調整報告", "美術部報告", "重構知識庫"], cats: ["doc", "coop", "coop", "ai"] },
        { date: "9/7", day: "一", isHoliday: false, tasks: ["重構知識庫", "納珈動態調整", "AI文字工具討論", "納珈更新給程式", "AI會議+報告更新", "3D會議", "阿尼亞合約進度確認", "魚X小魚優化"], cats: ["ai", "role", "ai", "role", "ai", "coop", "doc", "role"] },
        { date: "9/8", day: "二", isHoliday: false, tasks: ["討論工項", "重構知識庫", "合約討論", "更新組內AI報告", "跑阿尼亞續約流程", "魚X小魚優化", "魚X人魚spine外包回檔+反饋"], cats: ["coop", "ai", "doc", "ai", "doc", "role", "outsource"] },
        { date: "9/9", day: "三", isHoliday: false, tasks: ["魚X小魚優化", "重構知識庫", "更新小魚序列圖與人魚給程式", "跑外包簽核", "魚X納珈微調表演+貼圖"], cats: ["role", "ai", "role", "doc", "role"] },
        { date: "9/10", day: "四", isHoliday: false, tasks: ["重構知識庫", "月備份", "優化魚X小魚尺寸", "魚X人魚外包回檔+反饋", "開F1會議", "更新AI報告", "驗文字製作工具", "更新外包文件", "外包合約詢問", "魚X人魚外包回檔+反饋", "龍3關羽外包文件製作", "測試AI算老虎機版面"], cats: ["ai", "doc", "role", "outsource", "coop", "ai", "tool", "doc", "doc", "outsource", "doc", "ai"] },
        { date: "9/11", day: "五", isHoliday: false, tasks: ["重構知識庫", "談多語系工具使用", "外包合約相關洽談", "人魚回檔驗證", "討論AI影片優化製成", "打包魚X優化項目給程式", "討論語研1合作製成", "測試pixi做symbol"], cats: ["ai", "tool", "doc", "outsource", "ai", "role", "coop", "tool"] },
        { date: "9/14", day: "一", isHoliday: false, tasks: ["重構知識庫", "討論太陽神製作", "處理外包合約問題", "討論工項", "關羽發包文件製作", "更新AI報告", "驗魚X"], cats: ["ai", "coop", "doc", "coop", "doc", "ai", "role"] },
        { date: "9/15", day: "二", isHoliday: false, tasks: ["重構知識庫", "討論研一惡魔之火換皮風格", "和技術服務交流多語系需求", "修改AI報告", "美術會議", "接洽外包", "討論龍3關羽-發包文件"], cats: ["ai", "coop", "coop", "ai", "coop", "doc", "doc"] },
        { date: "9/16", day: "三", isHoliday: false, tasks: ["重構知識庫", "討論工項", "龍三關羽外包", "pixi做太陽神symbol", "討論研一老虎機"], cats: ["ai", "coop", "outsource", "role", "coop"] },
        { date: "9/17", day: "四", isHoliday: false, tasks: ["重構知識庫", "處理合約文件", "和美術部老魏開會", "和研一開會", "確認野牛2D初版設計", "處理合約文件", "提供呂布項目給研四", "關羽報價確認"], cats: ["ai", "doc", "coop", "coop", "role", "doc", "role", "doc"] },
        { date: "9/18", day: "五", isHoliday: false, tasks: ["製作老虎機2D拼板工具", "和研一確認EX按鈕", "老虎機流程設計+工具討論", "大富翁JP放大解析度", "pixi做太陽神symbol", "核對AI周報", "討論野牛風格方向", "開AI會議", "pixi做太陽神symbol"], cats: ["tool", "coop", "tool", "role", "role", "ai", "coop", "coop", "role"] },
        { date: "9/21", day: "一", isHoliday: false, tasks: ["合約接洽", "關羽-發包申請", "pixi做太陽神symbol", "更新AI報告", "AI會議", "整理惡魔之火資源", "AI製作惡魔之火相關文件+外包文件"], cats: ["doc", "doc", "role", "ai", "coop", "role", "ai"] },
        { date: "9/22", day: "二", isHoliday: false, tasks: ["AI製作惡魔之火相關文件+外包文件", "出太陽神symbol給程式", "美術AI報告更新", "美術會議", "AI製作惡魔之火相關文件+外包文件"], cats: ["ai", "role", "ai", "coop", "ai"] },
        { date: "9/23", day: "三", isHoliday: false, tasks: ["AI製作烈焰神龍拼板", "討論工作排成", "開研一事前會", "討論焰神龍拼板反饋"], cats: ["ai", "coop", "coop", "coop"] },
        { date: "9/24", day: "四", isHoliday: false, tasks: ["AI製作烈焰神龍拼板", "開FI會議", "更新研一知識庫", "AI製作烈焰神龍拼板"], cats: ["ai", "coop", "ai", "ai"] },
        { date: "9/29", day: "二", isHoliday: false, tasks: ["AI製作烈焰神龍拼板", "阿尼亞合約掃描+歸檔", "原力合約確認", "焰神龍拼板討論", "檔案歸檔公電", "AI製作烈焰神龍拼板"], cats: ["ai", "doc", "doc", "coop", "doc", "ai"] },
        { date: "9/30", day: "三", isHoliday: false, tasks: ["AI製作烈焰神龍拼板", "討論烈焰神龍+野牛反饋", "開研一會前會", "教孟孟用知識庫流程", "AI製作烈焰神龍拼板+外包文件"], cats: ["ai", "coop", "coop", "ai", "ai"] }
      ]
    },

    "10": {
      monthId: "10",
      monthName: "10月",
      title: "2026年10月度工作復盤報告",
      dateRange: "10/1 – 10/28",
      workdays: 19,
      overtime: 28.5,
      tasksCount: 122,
      aiTasksCount: 30,
      roleTasksCount: 9,
      roleProjectsList: "包含：烈焰神龍/火龍、野牛、犀牛、賽特2換皮熔岩爆發、龍3關羽、象神、雷神、人魚、老虎機換皮",
      vacationDays: 1,
      typhoonDays: 0,

      catCount: {
        role: 25,
        ai: 30,
        tool: 6,
        coop: 29,
        doc: 6,
        outsource: 26
      },

      weeklyAiTrend: [8, 9, 7, 6],
      weeklyOvertime: [7, 7.5, 7, 7],
      radarData: [88, 92, 85, 90, 80, 92],
      typhoonDaysList: [],

      strengths: [
        { icon: "🐲", title: "烈焰神龍與多專案全製程攻堅", desc: "10月深度推進《烈焰神龍》拼板製作、直版設計校正、Symbol比例整理與密集外包回檔修改，並並行推進《野牛》、《犀牛》、《熔岩爆發》與《象神》設計。" },
        { icon: "🧠", title: "知識庫體系化與老虎機工作流建構", desc: "全力投入知識庫開發，建置老虎機換皮工作流、外包SKILL與進度紀錄工具，並協助團隊成員帶教解決實務難題。" },
        { icon: "📦", title: "外包流程把關與多角色回檔反饋", desc: "精準把關烈焰神龍與龍3關羽外包回檔，完成人魚發票結案，並優化立體字、AB比對、3D找BUG等自研工具鏈。" }
      ],

      problems: [
        { icon: "🔄", title: "神龍與關羽外包反饋修改極密集", desc: "10月中上旬烈焰神龍與龍3關羽多日密集回檔反饋，規格與細節需反覆調校，耗費較多溝通成本。" },
        { icon: "🧩", title: "多題材專案並行帶來注意力分散", desc: "同月份同時推進火龍、野牛、犀牛、雷神、熔岩爆發與象神等多款專案前期，需妥善控管工項優先序。" }
      ],

      improvements: [
        { icon: "🚀", title: "擴充與普及外包 SKILL", desc: "深化10月開發的老虎機換皮與外包SKILL，讓外包規格交付更加標準化，減少來回反饋次數。" },
        { icon: "🛠️", title: "持續固化自動化工具鏈", desc: "結合月備份、立體字與找BUG小工具，將常態性檢核作業進一步自動化。" }
      ],

      dailyData: [
        { date: "10/1", day: "四", isHoliday: false, tasks: ["AI製作烈焰神龍拼板+外包文件", "討論工項", "和孟孟討論野牛", "和奕萱討論犀牛", "研一討論進知識庫", "AI製作烈焰神龍拼板"], cats: ["ai", "coop", "coop", "coop", "ai", "ai"] },
        { date: "10/2", day: "五", isHoliday: false, tasks: ["AI製作烈焰神龍拼板", "討論野牛進度", "討論火龍進度", "研二A會議", "更新canva", "討論研一火龍/野牛/犀牛目前版本", "更新討論內容到資料庫", "和研4交流製成", "製作烈焰神龍外包文件"], cats: ["ai", "coop", "coop", "coop", "doc", "coop", "ai", "coop", "outsource"] },
        { date: "10/5", day: "一", isHoliday: false, tasks: ["盤點9月工項", "月備份工具使用+反饋", "日備份工具使用", "製作烈焰神龍外包文件", "更新知識庫內容", "更新AI報告", "討論賽特2換皮熔岩爆發草稿", "線上AI會議", "調整熔岩爆發草稿背景太細緻缺少層次的問題", "調整symbol階層不明確的問題", "整理老虎機換皮工作流初版", "修改烈焰神龍反饋"], cats: ["doc", "tool", "tool", "outsource", "ai", "ai", "coop", "coop", "role", "role", "tool", "outsource"] },
        { date: "10/6", day: "二", isHoliday: false, tasks: ["修改烈焰神龍反饋", "討論進度工項", "協助看野牛", "協助看賽特2換皮熔岩爆發", "更新知識庫內容", "討論犀牛+烈焰神龍", "美術會議", "修改烈焰神龍", "幫孟孟看知識庫工具", "教小楊使用知識庫"], cats: ["outsource", "coop", "role", "role", "ai", "coop", "coop", "outsource", "ai", "coop"] },
        { date: "10/7", day: "三", isHoliday: false, tasks: ["修改烈焰神龍反饋", "和孟孟討論野牛外包", "研二F1會議", "修改烈焰神龍反饋", "整理烈焰神龍檔案提供外包"], cats: ["outsource", "coop", "coop", "outsource", "outsource"] },
        { date: "10/8", day: "四", isHoliday: false, tasks: ["整理烈焰神龍檔案提供外包", "測試AI流程", "幫孟孟看外包問題", "修改烈焰神龍反饋", "確認外包報價"], cats: ["outsource", "ai", "coop", "outsource", "doc"] },
        { date: "10/12", day: "一", isHoliday: false, tasks: ["確認外包進度", "外包報價", "討論野牛報價", "修改烈焰神龍反饋", "討論進度", "確認烈焰神龍反饋", "製作新的換皮工作流", "烈焰神龍反饋調整"], cats: ["outsource", "doc", "coop", "outsource", "coop", "outsource", "tool", "outsource"] },
        { date: "10/13", day: "二", isHoliday: false, tasks: ["烈焰神龍反饋調整", "人魚發票結案_送申請", "外包SKILL討論", "核對工項", "整理烈焰神龍檔案提供外包", "研二美術會議", "知識庫開發-老虎機工作流+外包SKILL"], cats: ["outsource", "doc", "ai", "coop", "outsource", "coop", "ai"] },
        { date: "10/14", day: "三", isHoliday: false, tasks: ["知識庫開發-老虎機工作流+外包SKILL+解決紅茶遇到的合併問題", "更新烈焰神籠外包問題", "製作進度紀錄工具", "開研一F1會議", "回龍3關羽外包反饋", "修改知識庫工具/回答知識庫問題"], cats: ["ai", "outsource", "tool", "coop", "outsource", "ai"] },
        { date: "10/15", day: "四", isHoliday: false, tasks: ["知識庫開發-老虎機工作流+解決孟孟問題", "龍3關羽回檔+反饋", "F1研一進度會議", "人魚發票結案", "烈焰神龍外包申請", "更新canva", "修正AB比對工具的BUG", "修正3D找BUG工具", "驗PSD工具"], cats: ["ai", "outsource", "coop", "doc", "outsource", "doc", "tool", "tool", "tool"] },
        { date: "10/16", day: "五", isHoliday: false, tasks: ["知識庫開發", "烈焰神龍外包回檔+反饋", "找字體提供外包", "修改文字工具"], cats: ["ai", "outsource", "outsource", "tool"] },
        { date: "10/19", day: "一", isHoliday: false, tasks: ["與外包核對回檔時間", "優化立體字工具", "更新AI報告", "3D會議", "神龍symbol回檔+調整+反饋", "確認雷神"], cats: ["outsource", "tool", "ai", "coop", "outsource", "coop"] },
        { date: "10/20", day: "二", isHoliday: false, tasks: ["研究外包+AI工具", "和外包確認項目", "神龍外包回檔+反饋", "龍3關羽回檔", "討論雷神專案", "更新AI報告", "美術會議", "神龍外包回檔+反饋", "更新知識庫", "龍3關羽外包文件製作"], cats: ["ai", "outsource", "outsource", "outsource", "coop", "ai", "coop", "outsource", "ai", "outsource"] },
        { date: "10/21", day: "三", isHoliday: false, tasks: ["討論工項", "反饋烈焰神龍", "回覆同事外包+知識庫問題", "龍3關羽反饋", "F1進度會議", "F1進度表更新", "調整龍3關羽場景與攝影機", "討論AI製成", "烈焰神龍回檔+反饋"], cats: ["coop", "outsource", "coop", "outsource", "coop", "coop", "role", "ai", "outsource"] },
        { date: "10/22", day: "四", isHoliday: false, tasks: ["回覆烈焰神龍外包", "更新研一雷神討論", "烈焰神龍外包回檔+調整+反饋", "研究老虎機AI流程", "整理檔案提供美術部"], cats: ["outsource", "coop", "outsource", "ai", "coop"] },
        { date: "10/27", day: "一", isHoliday: false, tasks: ["研二AI報告更新", "烈焰神龍2D回檔+反饋", "烈焰神龍symbol整理尺寸比例", "跑外包簽核", "龍3關羽回檔", "討論工項", "龍3關羽反饋", "討論象神草圖", "烈焰神龍直版調整", "熔岩爆發角色設計"], cats: ["ai", "outsource", "role", "doc", "outsource", "coop", "outsource", "coop", "role", "role"] },
        { date: "10/28", day: "二", isHoliday: false, tasks: ["知識庫優化", "更新研一進度表", "神龍直版設計校正", "神龍+龍3關羽外包問題回覆", "討論象神草圖設計", "研二F1會議", "更新研一老虎機知識庫", "神龍直版設計校正"], cats: ["ai", "coop", "role", "outsource", "coop", "coop", "ai", "role"] },
        { date: "10/29", day: "三", isHoliday: true, tasks: ["體檢請假"], cats: ["other"] }
      ]
    }
  },

  // 🏆 全年度總結資料
  annualSummary: {
    title: "2026 全年度工作復盤總結",
    subtitle: "全年度跨專案開發、AI 落地應用與工作流自動化成果統計",
    strengths: [
      { icon: "🤖", title: "AI 技術落地與 Agent 化", desc: "完成多語系 Skill、3D 貼圖修整 Skill、Blender 串 MCP 與 LLM Wiki 規劃，打造高效 Agent 工具鏈。" },
      { icon: "📐", title: "標準化 SOP 發布", desc: "發布《3D 專案資料夾結構 SOP (V1.0)》與外包流程教學，實現外包 `02_外包回檔` 與 `_del` 自動歸檔規範。" },
      { icon: "⏱️", title: "工時與產出穩定達標", desc: "連續雙月任務交付率 100%，累計完成 189 項任務，加班時數與專案推進品質維持高標。" }
    ],
    problems: [
      { icon: "⚡", title: "跨專案任務碎片化", desc: "每日任務切換頻率較高，需持續推動主題日分工與集中深度工作。" },
      { icon: "🔄", title: "專案 BUG 與資源修復成本", desc: "部分角色 Spine 與多語系切圖出現較多修復對齊，需持續優化驗收 Checklist。" }
    ],
    improvements: [
      { icon: "🚀", title: "推動 3 單位美術製程整合", desc: "將換皮與新專案流程標準化，推動全團隊共筆範本與 SOP 複用。" },
      { icon: "🤖", title: "擴充 Agent SKILL 工具庫", desc: "將常規性審核與歸檔工作全數 AI 工具化，提高產出效能。" }
    ]
  }
};

window.REVIEW_DATA_2026.getAnnualTotals = function() {
  const months = window.REVIEW_DATA_2026.months;
  let totalWorkdays = 0;
  let totalOvertime = 0;
  let totalTasks = 0;
  let totalAiTasks = 0;
  
  const monthlyLabels = [];
  const overtimeTrend = [];
  const tasksTrend = [];
  const aiTasksTrend = [];

  const annualCatCount = {
    role: 0,
    ai: 0,
    coop: 0,
    doc: 0,
    tool: 0,
    outsource: 0,
    other: 0
  };

  Object.keys(months).sort().forEach(mKey => {
    const m = months[mKey];
    totalWorkdays += m.workdays || 0;
    totalOvertime += m.overtime || 0;
    totalTasks += m.tasksCount || 0;
    totalAiTasks += m.aiTasksCount || 0;

    monthlyLabels.push(m.monthName);
    overtimeTrend.push(m.overtime || 0);
    tasksTrend.push(m.tasksCount || 0);
    aiTasksTrend.push(m.aiTasksCount || 0);

    if (m.catCount) {
      Object.keys(m.catCount).forEach(catKey => {
        annualCatCount[catKey] = (annualCatCount[catKey] || 0) + m.catCount[catKey];
      });
    }
  });

  // 全年度各領域不重複項目盤點對照 (以領域分類)
  const annualCatItems = {
    role: ["關羽", "貂蟬", "孫悟空", "大富翁", "齊天財神", "小兵", "黃帝", "滿貫大爺", "骰子", "殭屍", "那迦/納珈", "皇帝手", "貝殼貼圖", "獅子魚", "珍珠貝", "淘氣鯊", "獵龍3", "彩金捕魚", "小綠魚", "魚X小魚", "水晶鱷魚", "太陽神 Symbol", "野牛", "呂布", "惡魔之火", "烈焰神龍", "賽特/賽特1000/賽特2", "招財童子", "辣椒2", "男孩", "煙火巨魔", "技能炮", "LINE宣傳貼圖", "Q財神", "龍3炮台/綠炮", "無限轉輪", "犀牛", "賽特2換皮熔岩爆發", "象神", "雷神"],
    ai: ["AI Agent 報告與週報", "Text Art Tool 文字 AI 工具", "Claude MCP 測試與整合", "3D 貼圖修整 Skill", "文字多語系 Skill", "Blender 串接 MCP 擾動 Shader", "企業級 AI 知識庫重構 (LLM Wiki)", "烈焰神龍 2D 拼板 AI 製作", "惡魔之火換皮風格與資源整理", "線上 AI 工具盤點報告", "Codex / Claude 工具盤點", "AI+3D 會議與報告", "老虎機換皮工作流 (AI製程)", "外包 SKILL 開發"],
    coop: ["跨部門需求對齊 (靈貓/家緯/昭仁/老魏/阿偉/小楊)", "週檢與月備份會前會", "美術部會與跨單位溝通", "AI 小助理與研一/研二/研四合作會議", "F1 / 換皮專案事前會", "團隊成員 AI 知識庫帶教與範本對齊", "多語系需求與技術服務對接", "外包 E 化會議與分享會", "魚機技術會", "無限轉輪專案對齊", "研二 F1 進度會議與進度表更新"],
    doc: ["《3D 專案資料夾結構 SOP (V1.0)》", "報告製作-競品介紹_皮克敏", "競業分析報告", "Canva 簡報製作與更新", "外包金額表格整理", "外包流程與結案教學 SOP", "阿尼亞續約合約掃描與歸檔", "關羽發包與合約簽核", "原力合約與外包續約處理", "檔案歸檔公電", "許大/一書合約延展與續簽", "線上事業處表單更新", "年度目標製作", "發票與外包付款信件", "人魚發票結案送審"],
    tool: ["Spine AB 比對與檢查工具", "JR3DVIEW 文件工具", "JR3D 工具測試", "三國攝影機測試", "序列圖處理工具製作", "MAX 合併工具測試", "壓縮容量工具驗證", "Pixi Symbol 製作工具", "老虎機 2D 拼板工具", "文字製作工具驗證", "無限轉輪測試檔製作", "FBX減幀驗證", "月/日備份工具", "進度紀錄工具", "3D 找 BUG 工具", "PSD 工具驗證", "立體字工具優化"],
    outsource: ["靈貓外包（關羽*2 + 龍3貂蟬）", "智樂堂外包（皇帝手）", "火蟻 3D 角色（呂布）結單", "云像 3D 角色（貂蟬）結單", "賽特2 / 賽特1000 外包發包與反饋", "貂蟬動態發包與回檔調校", "招財童子外包反饋", "孫悟空 2D/Spine 資源回檔與反饋", "魚X人魚 Spine 外包點收與驗收", "關羽/人魚/龍3 發包申請與回檔 verification", "辣椒2外包文件撰寫與素材打包", "貂蟬特效外包申請與交接", "烈焰神龍外包申請/回檔/反饋", "龍3關羽外包反饋與場景鏡頭調整", "野牛報價與外包討論"]
  };

  return {
    totalWorkdays,
    totalOvertime: totalOvertime.toFixed(1),
    totalTasks,
    totalAiTasks,
    monthlyLabels,
    overtimeTrend,
    tasksTrend,
    aiTasksTrend,
    annualCatCount,
    annualCatItems
  };
};
