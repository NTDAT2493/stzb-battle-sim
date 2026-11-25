/**
 * Việt hoá giao diện STZB Battle Simulator.
 * Chỉ dịch nhãn giao diện; không thay đổi dữ liệu chiến đấu hay nội dung tên riêng.
 * Có thể chuyển Việt/中文, lựa chọn được lưu trong localStorage.
 */
type Language = 'vi' | 'zh';
const KEY = 'stzb_ui_language';

const DICT: Record<string, string> = {
  '正在加载武将画像':'Đang tải ảnh tướng',
  '首次加载会把画像存进缓存，之后开页秒进':'Lần đầu sẽ lưu ảnh vào bộ nhớ đệm; những lần sau mở trang nhanh hơn',
  '跳过':'Bỏ qua',
  '加载较慢，请检查网络后刷新页面':'Tải chậm, vui lòng kiểm tra mạng rồi làm mới trang',
  '战斗模拟器':'Mô phỏng chiến đấu',
  '配将':'Xếp đội hình',
  '战报':'Báo cáo trận',
  '战法背包':'Kho chiến pháp',
  '战法':'Chiến pháp',
  '伤害测试':'Kiểm tra sát thương',
  '伤害测试实验室':'Phòng thử nghiệm sát thương',
  '预设':'Đội hình lưu',
  '我的预设':'Đội hình của tôi',
  '热门预设':'Đội hình phổ biến',
  '教程':'Hướng dẫn',
  '公告':'Thông báo',
  '设置':'Cài đặt',
  '声明':'Tuyên bố miễn trừ',
  '开始模拟':'Bắt đầu mô phỏng',
  '模拟':'Mô phỏng',
  '模拟十次':'Mô phỏng 10 lần',
  '模拟五十次':'Mô phỏng 50 lần',
  '模拟五十场':'Mô phỏng 50 trận',
  '模拟十场':'Mô phỏng 10 trận',
  '详情':'Chi tiết',
  '属性':'Thuộc tính',
  '配点':'Phân điểm',
  '兵种':'Binh chủng',
  '势力':'Thế lực',
  '筛选':'Lọc',
  '搜索':'Tìm kiếm',
  '搜索武将':'Tìm tướng',
  '搜索战法':'Tìm chiến pháp',
  '全部':'Tất cả',
  '确定':'Xác nhận',
  '取消':'Hủy',
  '保存':'Lưu',
  '删除':'Xóa',
  '编辑':'Chỉnh sửa',
  '关闭':'Đóng',
  '返回':'Quay lại',
  '重置':'Đặt lại',
  '清空':'Xóa hết',
  '上传图片':'Tải ảnh lên',
  '导入':'Nhập dữ liệu',
  '导出':'Xuất dữ liệu',
  '复制':'Sao chép',
  '名称':'Tên',
  '队伍名称':'Tên đội hình',
  '请输入名称':'Nhập tên',
  '我方':'Phe ta',
  '敌方':'Địch',
  '红方':'Phe đỏ',
  '蓝方':'Phe xanh',
  '大营':'Đại doanh',
  '中军':'Trung quân',
  '前锋':'Tiên phong',
  '攻击':'Tấn công',
  '防御':'Phòng thủ',
  '谋略':'Mưu lược',
  '速度':'Tốc độ',
  '兵力':'Quân số',
  '士气':'Sĩ khí',
  '等级':'Cấp',
  '进阶':'Tiến giai',
  '觉醒':'Thức tỉnh',
  '主战法':'Chiến pháp chủ động',
  '自带战法':'Chiến pháp mặc định',
  '可学习战法':'Chiến pháp có thể học',
  '携带战法':'Chiến pháp mang theo',
  '战法等级':'Cấp chiến pháp',
  '战法类型':'Loại chiến pháp',
  '被动':'Bị động',
  '指挥':'Chỉ huy',
  '主动':'Chủ động',
  '追击':'Truy kích',
  '骑兵':'Kỵ binh',
  '步兵':'Bộ binh',
  '弓兵':'Cung binh',
  '魏':'Ngụy',
  '蜀':'Thục',
  '吴':'Ngô',
  '群':'Quần',
  '回合':'Lượt',
  '第':'Lượt thứ ',
  '胜利':'Chiến thắng',
  '失败':'Thất bại',
  '平局':'Hòa',
  '总伤害':'Tổng sát thương',
  '伤害':'Sát thương',
  '治疗':'Hồi phục',
  '恢复':'Hồi phục',
  '控制':'Khống chế',
  '发动次数':'Số lần kích hoạt',
  '发动率':'Tỷ lệ kích hoạt',
  '杀伤':'Sát thương gây ra',
  '统计':'Thống kê',
  '详细战报':'Báo cáo chi tiết',
  '战报详情':'Chi tiết trận đấu',
  '战法统计':'Thống kê chiến pháp',
  '武将统计':'Thống kê tướng',
  '伤害占比':'Tỷ trọng sát thương',
  '恢复占比':'Tỷ trọng hồi phục',
  '控制占比':'Tỷ trọng khống chế',
  '平均伤害':'Sát thương trung bình',
  '最高伤害':'Sát thương cao nhất',
  '最低伤害':'Sát thương thấp nhất',
  '标准差':'Độ lệch chuẩn',
  '中位数':'Trung vị',
  '木桩侍卫':'Mục tiêu thử nghiệm',
  '木桩队伍':'Đội hình mục tiêu',
  '切回侍卫':'Chuyển về mục tiêu mặc định',
  '实验室':'Phòng thử nghiệm',
  '属性点':'Điểm thuộc tính',
  '自由属性点':'Điểm thuộc tính tự do',
  '加点':'Phân bổ điểm',
  '装备':'Trang bị',
  '未选择':'Chưa chọn',
  '空位':'Vị trí trống',
  '上阵':'Ra trận',
  '替换':'Thay thế',
  '拖拽':'Kéo thả',
  '拼音搜索':'Tìm bằng pinyin',
  '按品级筛选':'Lọc theo phẩm cấp',
  '按类别筛选':'Lọc theo loại',
  '品级':'Phẩm cấp',
  '类别':'Danh mục',
  '热门':'Phổ biến',
  '我的':'Của tôi',
  '另存为我的预设':'Lưu thành đội hình của tôi',
  '保存预设':'Lưu đội hình',
  '应用':'Áp dụng',
  '上场':'Vào trận',
  '重命名':'Đổi tên',
  '已保存':'Đã lưu',
  '已删除':'Đã xóa',
  '没有数据':'Không có dữ liệu',
  '暂无记录':'Chưa có dữ liệu',
  '加载中':'Đang tải',
  '网络错误':'Lỗi mạng',
  '请稍候':'Vui lòng chờ',
  '请先选择武将':'Vui lòng chọn tướng trước',
  '请先配置队伍':'Vui lòng thiết lập đội hình trước',
  '本机存储不可用':'Không thể sử dụng bộ nhớ trên thiết bị này',
  '赛季模式':'Chế độ mùa giải',
  '经典模式':'Chế độ cổ điển',
  '北伐副本':'Phó bản Bắc Phạt',
  '副将':'Phó tướng',
  '阵容':'Đội hình',
  '推荐':'Đề xuất',
  'AI配将':'AI xếp đội hình',
  '智能配将':'Xếp đội hình thông minh',
  '伤害分析':'Phân tích sát thương',
  '期望伤害':'Sát thương kỳ vọng',
  '胜率':'Tỷ lệ thắng',
  '对战':'Đối chiến',
  '目标':'Mục tiêu',
  '等级上限':'Cấp tối đa',
  '基础属性':'Thuộc tính cơ bản',
  '成长':'Tăng trưởng',
  '说明':'Giải thích',
  '帮助':'Trợ giúp',
  '语言':'Ngôn ngữ',
  '中文':'中文',
};

const entries = Object.entries(DICT).sort((a, b) => b[0].length - a[0].length);
const textState = new WeakMap<Text, { source: string; last: string }>();
const attrState = new WeakMap<Element, Map<string, { source: string; last: string }>>();
let language: Language = 'vi';
let observer: MutationObserver | null = null;
let switcher: HTMLButtonElement | null = null;

function translate(source: string): string {
  let result = source;
  for (const [from, to] of entries) result = result.split(from).join(to);
  return result;
}

function applyText(node: Text): void {
  const current = node.nodeValue ?? '';
  if (!current.trim()) return;
  const previous = textState.get(node);
  if (previous && current === previous.last) return;
  const source = previous ? current : current;
  const next = language === 'vi' ? translate(source) : source;
  textState.set(node, { source, last: next });
  if (next !== current) node.nodeValue = next;
}

function applyAttribute(el: Element, name: string): void {
  const current = el.getAttribute(name);
  if (current === null || !current.trim()) return;
  let map = attrState.get(el);
  if (!map) { map = new Map(); attrState.set(el, map); }
  const previous = map.get(name);
  if (previous && current === previous.last) return;
  const source = current;
  const next = language === 'vi' ? translate(source) : source;
  map.set(name, { source, last: next });
  if (next !== current) el.setAttribute(name, next);
}

function scan(root: Node): void {
  if (root.nodeType === Node.TEXT_NODE) { applyText(root as Text); return; }
  if (!(root instanceof Element || root instanceof Document || root instanceof DocumentFragment)) return;
  if (root instanceof Element && root.matches('script,style,code,pre,textarea,[data-no-translate]')) return;
  if (root instanceof Element) {
    for (const attr of ['title', 'placeholder', 'aria-label', 'alt']) applyAttribute(root, attr);
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest('script,style,code,pre,textarea,[data-no-translate]')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  let node: Node | null;
  while ((node = walker.nextNode())) applyText(node as Text);
  if (root instanceof Element) root.querySelectorAll('[title],[placeholder],[aria-label],[alt]').forEach(el => {
    for (const attr of ['title', 'placeholder', 'aria-label', 'alt']) applyAttribute(el, attr);
  });
}

function setLanguage(next: Language): void {
  language = next;
  try { localStorage.setItem(KEY, next); } catch { /* private mode */ }
  document.documentElement.lang = next === 'vi' ? 'vi' : 'zh-CN';
  document.title = next === 'vi' ? 'Mô phỏng chiến đấu STZB' : '战斗模拟器';
  document.querySelector('meta[name="apple-mobile-web-app-title"]')?.setAttribute('content', next === 'vi' ? 'Mô phỏng STZB' : '战斗模拟器');
  scan(document.body);
  if (switcher) switcher.textContent = next === 'vi' ? '中文' : 'Tiếng Việt';
}

function mountSwitcher(): void {
  if (switcher || !document.body) return;
  switcher = document.createElement('button');
  switcher.type = 'button';
  switcher.textContent = language === 'vi' ? '中文' : 'Tiếng Việt';
  switcher.title = 'Chuyển đổi ngôn ngữ / 切换语言';
  switcher.setAttribute('aria-label', 'Chuyển đổi ngôn ngữ');
  switcher.style.cssText = 'position:fixed;right:12px;top:12px;z-index:10050;padding:8px 12px;border:1px solid #b99a69;border-radius:8px;background:#211b14;color:#f4e6ce;font:600 13px/1.2 system-ui,sans-serif;box-shadow:0 3px 12px #0006;cursor:pointer;';
  switcher.addEventListener('click', () => setLanguage(language === 'vi' ? 'zh' : 'vi'));
  document.body.appendChild(switcher);
}

function start(): void {
  try { language = localStorage.getItem(KEY) === 'zh' ? 'zh' : 'vi'; } catch { language = 'vi'; }
  mountSwitcher();
  setLanguage(language);
  observer = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData') applyText(record.target as Text);
      else record.addedNodes.forEach(scan);
      if (record.type === 'attributes' && record.target instanceof Element && record.attributeName) {
        applyAttribute(record.target, record.attributeName);
      }
    }
  });
  observer.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['title', 'placeholder', 'aria-label', 'alt'] });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
else start();
