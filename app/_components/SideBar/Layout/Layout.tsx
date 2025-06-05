import { type Layout } from "@/app/_data/dataTypes";
import { State } from "@/app/types";
import styles from "./Layout.module.scss";

interface Props {
   layouts: Layout[];
   setState: (state: State) => void;
   clearSelected: () => void;
}

function Layout({ layouts, setState, clearSelected }: Props) {
   function handleClick(layout: State) {
      setState(layout);
      clearSelected();
   }

   return (
      <div className={styles.container}>
         <h2 className="title">布局模板</h2>
         <div className={styles.layout_container}>
            {layouts.map((layout, index) => (
               <div
                  key={index}
                  className={styles.layout}
                  onClick={() => handleClick(layout.layout)}
               >
                  <layout.img />
                  <h4 className={styles.layout__title}>{translateLayoutName(layout.name)}</h4>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Layout;

function translateLayoutName(name: string): string {
   switch (name) {
      case "Fill Space": return "填充空间";
      case "Stretch Middle": return "中间拉伸";
      case "HTML5": return "HTML5";
      case "Alternating Grid": return "交错网格";
      case "Masonry Column": return "瀑布流列";
      case "Masonry Row": return "瀑布流行";
      case "3x3 Grid": return "3x3 网格";
      case "4x4 Grid": return "4x4 网格";
      case "Align Center": return "居中对齐";
      case "Fill Right": return "填充右侧";
      case "Fill Center": return "填充中间";
      case "Horizontal Bars": return "水平条";
      case "Vertical Bars": return "垂直条";
      case "Row Wrap": return "行换行";
      case "Vertical Stack": return "垂直堆叠";
      case "Pancake Stack": return "煎饼堆叠";
      case "Sidebar": return "侧边栏";
      case "HTML5 - 2": return "HTML5 - 2";
      case "12 Column System": return "12列系统";
      case "Collage": return "拼贴布局";
      case "Infinite Rows": return "无限行";
      case "Infinite Columns": return "无限列";
      default: return name;
   }
}
