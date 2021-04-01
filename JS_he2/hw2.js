"use strict"

document.writeln(`
<h1>Magic Game(JavaScript version)</h1>
<p id="select">心中默想一個 1 到 63 間的任何數 </p>
`);

let i,j,tmp,tmp2,tmp3;
for(i=0;i<6;i++){
    document.write(`<table>
        <tr class='column_top'><td colspan="8">第${(i+1)} 張卡片
        <input type = "checkbox" value = "${2**i}" id="checkbox${i+1}">
        </td></tr>
    `);
    console.log('current:'+i);
    tmp2 = 1<<i;
    for(j=0;j<=31;j++){
        tmp3 = j&(tmp2-1); // 取出 adding positon 下的bit;
        tmp  = j<<1; //把前半段上移
        tmp &= ((1<<6)-tmp2); //取出上半段的bit
        tmp |= tmp2; // 把position 設為1
        tmp |= tmp3; // 把下半段補回去
        if(j%8==0)document.write(`<tr rowspan>`);
        document.write('<td>'+tmp+'</td>');
        if(j%8==7)document.write(`</tr>`);        
    }
    document.writeln('</table>');
}

document.write(`<input type="button" value="答案" class='answer_button' onclick='check()' id="parent">`); 