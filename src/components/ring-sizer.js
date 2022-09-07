import React from 'react';
import './ring-sizer.css';


const Canvas = () => {

const [slider, setRangeval] = React.useState("15");
const cnv = React.useRef();
const table = React.useRef();


const Table = () => {
    return(

<div className ="tableContainer" >
<table ref = {table}>
<thead>
    <th>Inside Diameter</th>
    <th>SA/UK</th>
    <th>UK/Canada</th>
    <th>Circumference</th>
</thead>
<tr>
    <th>mm</th>
    <th>Ring Size</th>
    <th>Ring Size</th>
    <th>Straight mm</th>
</tr>
<tbody>
<tr>
    <td>15mm</td>
    <td>H</td>
    <td>4</td>
    <td>46.7</td>
</tr>
<tr>
    <td>15.3mm</td>
    <td>I</td>
    <td>4.5</td>
    <td>48</td>
</tr>
<tr>
    <td>15.6mm</td>
    <td>J</td>
    <td>5</td>
    <td>49.3</td>
</tr>
<tr>
    <td>16.2mm</td>
    <td>K</td>
    <td>5.5</td>
    <td>50.6</td>
</tr>
<tr>
    <td>16.6mm</td>
    <td>L</td>
    <td>6</td>
    <td>51.9</td>
</tr>
<tr>
    <td>16.9mm</td>
    <td>M</td>
    <td>6.5</td>
    <td>53.1</td>
</tr>
<tr>
    <td>17.2mm</td>
    <td>N</td>
    <td>7</td>
    <td>54.4</td>
</tr>
<tr>
    <td>17.8mm</td>
    <td>O</td>
    <td>7.5</td>
    <td>55.7</td>
</tr>
<tr>
    <td>18.1mm</td>
    <td>P</td>
    <td>8</td>
    <td>57</td>
</tr>
<tr>
    <td>18.5mm</td>
    <td>Q</td>
    <td>8.5</td>
    <td>58.3</td>
</tr>
<tr>
    <td>19.1mm</td>
    <td>R</td>
    <td>9</td>
    <td>59.5</td>
</tr>
<tr>
    <td>19.4mm</td>
    <td>S</td>
    <td>9.5</td>
    <td>60.8</td>
</tr>
<tr>
    <td>19.7mm</td>
    <td>T</td>
    <td>10</td>
    <td>62.1</td>
</tr>
<tr>
    <td>20.4mm</td>
    <td>U</td>
    <td>10.5</td>
    <td>63.4</td>
</tr>
<tr>
    <td>20.7mm</td>
    <td>V</td>
    <td>11</td>
    <td>64.6</td>
</tr>
<tr>
    <td>21.0mm</td>
    <td>W</td>
    <td>11.5</td>
    <td>65.9</td>
</tr>
<tr>
    <td>21.6mm</td>
    <td>X</td>
    <td>12</td>
    <td>67.2</td>
</tr>
<tr>
    <td>22.0mm</td>
    <td>Y</td>
    <td>12.5</td>
    <td>68.5</td>
</tr>
<tr>
    <td>22.3mm</td>
    <td>Z</td>
    <td>13</td>
    <td>69.7</td>
</tr> <tr>
    <td>22.9mm</td>
    <td>Z+2</td>
    <td>13.5</td>
    <td>71</td>
</tr>
<tr>
    <td>23.2mm</td>
    <td>Z+3</td>
    <td>14</td>
    <td>72.3</td>
</tr>
<tr>
    <td>23.6mm</td>
    <td>Z+4</td>
    <td>14.5</td>
    <td>73.6</td>
</tr>
<tr>
    <td>24mm</td>
    <td>Z+5</td>
    <td>15</td>
    <td>74.8</td>
</tr>
</tbody>
</table>
</div> 
)};



const draw = ctx => {
    const scale = slider/(2*0.26);
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    ctx.arc(100,105,scale,0,Math.PI*2); //x,y,radius,start angle,end angle,false/true)
    ctx.stroke();
    ctx.moveTo(100-scale, 105);
    ctx.lineTo(100-20, 105);
    ctx.stroke();
    ctx.moveTo(100+20, 105);
    ctx.lineTo(100+scale, 105);
    ctx.stroke();
    ctx.font = "10px Verdana";
    ctx.strokeText(slider+"mm",85,107,50);
    ctx.closePath();
}




React.useEffect(() => {
    const canvas = cnv.current;
    const ctx = canvas.getContext('2d'); 
    draw(ctx, slider);

    const tab = table.current;
    const tr = tab.getElementsByTagName("tr");
    for (let i=1; i < tr.length; i++){
        const td = tr[i].getElementsByTagName("td")[0];
        const slice = td.textContent.slice(0,2);
        if(slice === slider) {
            tr[i].style.display = ""
        } else {
            tr[i].style.display = "none";
        }
    }
});


return (
    <>
    <body className = "body">
    <div className="font">
    <h2> Ring Sizer using a credit/ debit card</h2>
    <br/>
    <h3> Resize window until card height is the same as the blue lines</h3>
    <br/>
    <h3> Place ring on circle and move slider until circle fits your ring</h3>
    </div>

    <hr className = "hr"/>

    <canvas
    className = "myCanvas"
    ref={cnv}
    width="200"
    height="210"
    >
    Browser doesn't support this feature
    </canvas>

    <hr className = "hr"/>

    <input 
    className = "slider"
    type="range" 
    defaultValue="15" min="15" max="24" step="1" 
    onChange={(event) => setRangeval(event.target.value)}/>

    <Table />
    </body>
</>
)

};



export default Canvas;


