/* כל שאלוני הבגרות באזרחות (מגזר ממלכתי, עברית) שנמצאו במאגר משרד החינוך. מועד: 1 = חורף, 6 = קיץ, אחר = מועד מיוחד */
CIV.archive = (function () {
  var list = [
    [2017, 1], [2017, 6], [2018, 1], [2018, 6], [2019, 1], [2019, 6], [2020, 1], [2020, 5], [2020, 6],
    [2021, 1], [2021, 2], [2021, 3], [2021, 5], [2021, 6], [2022, 1], [2022, 2], [2022, 6], [2023, 1], [2023, 6],
    [2024, 1], [2024, 6], [2025, 1], [2025, 6], [2026, 1], [2026, 6]
  ];
  var heb = { 2017: 'תשע"ז', 2018: 'תשע"ח', 2019: 'תשע"ט', 2020: 'תש"ף', 2021: 'תשפ"א', 2022: 'תשפ"ב', 2023: 'תשפ"ג', 2024: 'תשפ"ד', 2025: 'תשפ"ה', 2026: 'תשפ"ו' };
  var out = list.map(function (x) {
    var y = x[0], m = x[1];
    var moed = m === 1 ? 'חורף' : m === 6 ? 'קיץ' : 'מועד מיוחד';
    return { y: y, m: m, label: moed + ' ' + heb[y] + ' (' + y + ')', q: '034281', pdf: 'https://meyda.education.gov.il/sheeloney_bagrut/' + y + '/' + m + '/HEB/34281.pdf' };
  });
  out.push({ y: 2026, m: 1, label: 'חורף תשפ"ו (2026)', q: '034215 – עקרונות ורשויות', pdf: 'https://meyda.education.gov.il/sheeloney_bagrut/2026/1/HEB/34215.pdf' });
  out.push({ y: 2026, m: 1, label: 'חורף תשפ"ו (2026)', q: '034225 – לאומיות וזכויות', pdf: 'https://meyda.education.gov.il/sheeloney_bagrut/2026/1/HEB/34225.pdf' });
  out.push({ y: 2026, m: 6, label: 'קיץ תשפ"ו (2026)', q: '034215 – עקרונות ורשויות', pdf: 'https://meyda.education.gov.il/sheeloney_bagrut/2026/6/HEB/34215.pdf' });
  out.push({ y: 2026, m: 6, label: 'קיץ תשפ"ו (2026)', q: '034225 – לאומיות וזכויות', pdf: 'https://meyda.education.gov.il/sheeloney_bagrut/2026/6/HEB/34225.pdf' });
  return out.sort(function (a, b) { return b.y - a.y || b.m - a.m; });
})();
CIV.bank = `https://pop.education.gov.il/tchumey_daat/citizenship/citizenship-high-school/citizenship-pedagogy/bagrut-exam/`;
