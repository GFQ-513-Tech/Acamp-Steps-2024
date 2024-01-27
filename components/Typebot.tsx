import dynamic from 'next/dynamic';
import styled from 'styled-components';

const Bubble = dynamic(() => import('@typebot.io/react').then((module) => module.Bubble), { ssr: false });

// Exemplo de uso do componente Bot
const TypebotComponent = () => {
  return (
    <BotWrapper>
      <Bubble
        typebot="0-inicio-dflob8d"
        apiHost="https://viewer.gfq513.com.br"
        previewMessage={{
          message: 'Bora acampar?! 😃',
          autoShowDelay: 5000,
          avatarUrl:
            'https://s3.typebot.io/public/workspaces/clrf92v5j000z6nxkv54ggijh/typebots/clrm72g6j0001zrkdyxgzd3za/hostAvatar?v=1705763403125',
        }}
        theme={{
          button: { backgroundColor: '#1f432e', size: 'medium' },
          previewMessage: { backgroundColor: '#fff', textColor: '#000000' },
        }}
      />
      ;
    </BotWrapper>
  );
};

const BotWrapper = styled.div`
  display: none;
`;

export default TypebotComponent;
