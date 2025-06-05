import styles from "./About.module.scss";

function About() {
   return (
      <div className={styles.about}>
         <div className={styles.content}>
            <h1>关于 Flexbox Labs</h1>
            <p><strong>Flexbox Labs</strong> 是一个可视化工具，帮助你使用 CSS Flexbox 创建布局。它拥有直观的界面和实时预览，让实验和学习变得轻松高效。</p>

            <div>
               <h2>贡献</h2>
               <p>
                  Flexbox Labs 是开源项目！你可以在
                  <a
                     href="https://github.com/prazzon/flexbox-labs"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     GitHub
                  </a>
                  上找到本项目。如果你有反馈、建议或遇到任何问题，欢迎在
                  <a
                     href="https://github.com/prazzon/flexbox-labs/issues"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     这里
                  </a>
                  提交 issue。
               </p>
            </div>

            <div>
               <h2>支持</h2>
               <p>
                  如果你觉得 Flexbox Labs 对你有帮助，欢迎通过
                  <a
                     href="https://buymeacoffee.com/prazzon"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Buy Me a Coffee
                  </a>
                  支持项目开发。你的支持将帮助项目持续改进和维护。
               </p>
            </div>

            <footer>
               <p>
                  由 ❤️ 制作，作者：
                  <a
                     href="https://github.com/prazzon"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     prazzon
                  </a>
               </p>
            </footer>
         </div>
      </div>
   );
}

export default About;
