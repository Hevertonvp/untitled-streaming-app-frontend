import React from 'react';
import { FaRegHandshake } from 'react-icons/fa';
import Card from './card';
function Main() {
  const cardData = [
    {
      id: '1',
      imgUrl: '../../images/money.png',
      isInverted: true,
      headText: 'Comece agora mesmo sem nenhum investimento!',
      description:
        'lorscrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letrasen ',
    },
    {
      id: '2',
      imgUrl: '../../images/stats.png',
      isInverted: false,
      headText: 'Tenha acesso à estatisticas de venda e calculos de lucro',
      description:
        'scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letras ',
    },
    {
      id: '3',
      imgUrl: '../../images/notification.png',
      isInverted: true,
      headText:
        'Receba notificações de vencimentos dos clientes e envie mensagens automáticas',
      description:
        'scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letras ',
    },
    {
      id: '4',
      imgUrl: '../../images/money.png',
      isInverted: false,
      headText: 'Descontada apenas uma pequena taxa por venda realizada',
      description:
        'scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letras ',
    },
  ];
  return cardData.map((item, i) => {
    return (
      <Card
        key={item.id}
        img={item.imgUrl}
        title={item.headText}
        description={item.description}
        isInverted={item.isInverted}
      />
    );
  });
}

export default Main;
