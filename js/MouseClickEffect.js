var a_idx = 0;

function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("过目不忘","十年寒窗","博学多才","见多识广","才高八斗",
"明察秋毫","英明果断","分身有术","孜孜不倦","花容月貌",
"力排众议","力挽狂澜","气贯长虹","气势磅礴","气吞山河",
"学富五车","大公无私","一鸣惊人","长相骏雅","身付异秉",
"见多识广","才高八斗","学富五车","文武双全","雄韬伟略",
"盖世无双","龙飞凤舞","一丝不苟","身兼数职","日理万机",
"一鸣惊人","叱诧风云","排山倒海","惊涛骇浪","雷霆万钧",
"谈吐不凡","谈笑风声","高谈阔论","眉飞色舞","运筹帷幄",
"鹤发童颜","沉鱼落雁","气宇轩昂","威风凛凛","字迹工整",
"万古流芳","一本正经","一箭双雕","长篇大论","功德无量",
"无孔不入","千篇一律","口诛笔伐","文从字顺","十全十美",
"忍辱负重","盖世无双","龙飞凤舞","一丝不苟","身兼数职",
"才思敏捷","过目不忘","十年寒窗","博学多才","见多识广",
"惊心动魄","横扫千军","惊天动地","见缝插针","无孔不入",
"无与伦比","励精图治","壮志凌云","高瞻远瞩","忍辱负重",
"奉公守法","艰苦奋斗","忠贞不渝","舍己为人","大公无私",
"坚韧不拔","身体力行","空前绝后","视死如归","英姿焕发",
"一尘不染","一鸣惊人","叱诧风云","排山倒海","惊涛骇浪",
"艰苦奋斗","忠贞不渝","舍己为人","大公无私","一尘不染",
"才高八斗","学富五车","文武双全","雄韬伟略","谈吐不凡",
"如花似玉","相貌堂堂","落落大方","眉清目秀","闭月羞花",
"大显神通","出口成章","出类拔萃","出神入化","万古流芳",
"完美无缺","一针见血","远见卓识","义正词严","一气呵成",
"身体力行","空前绝后","视死如归","英姿焕发","奉公守法",
"一本正经","一箭双雕","长篇大论","功德无量","力排众议",
"千篇一律","口诛笔伐","文从字顺","十全十美","无懈可击",
"无懈可击","无与伦比","励精图治","壮志凌云","高瞻远瞩",
"雷霆万钧","惊心动魄","横扫千军","惊天动地","见缝插针",
"文笔极佳","才思敏捷","过目不忘","十年寒窗","博学多才",
"力挽狂澜","气贯长虹","气势磅礴","气吞山河","坚韧不拔",
"言简意赅","完美无缺","一针见血","远见卓识","义正词严",
"谈笑风声","高谈阔论","眉飞色舞","运筹帷幄","言简意赅",
"一气呵成","大显神通","出口成章","出类拔萃","出神入化",
"日理万机","明察秋毫","英明果断","分身有术");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": `rgb(${getRandom(255,0)},${getRandom(255,0)},${getRandom(255,0)})`,
            "user-select": 'none',
            "cursor": 'default'
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function () {
                $i.remove();
            });
    });
});