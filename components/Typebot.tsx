import { useEffect } from 'react';

declare global {
    interface Window {
        Typebot: any;
    }
}

function TypebotComponent() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2.31/dist/web.js';
    script.onload = () => {
      window.Typebot.initBubble({
        typebot: "0-inicio-t2bvgym",
        apiHost: "https://viewer.gfq513.com.br",
        theme: {
          button: { backgroundColor: "#128C7E" },
          chatWindow: {
            backgroundColor: "https://s3.fr-par.scw.cloud/typebot/public/typebots/cli88mae30010mh0f0yzjqn48/background?v=1685470080750"
          }
        }
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default TypebotComponent;
