import dynamic from 'next/dynamic';
import styled from 'styled-components';

const Bubble = dynamic(() => import('@typebot.io/react').then((module) => module.Bubble), { ssr: false });

// Exemplo de uso do componente Bot
const TypebotComponent = () => {
  return (
    <BotWrapper>
      <Bubble typebot="1-apresenta-o-r7pb3yk" apiHost="https://viewer.gfq513.com.br" />;
    </BotWrapper>
  );
};

const BotWrapper = styled.div`
  display: none;
`;

export default TypebotComponent;
