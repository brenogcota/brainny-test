import React from 'react';
import { useStateLocale } from '../../store/context/locale';

import ListItem from '../ListItem';

import { Container } from './styles';

function List({ registers }) {
  const { locale } = useStateLocale()

  return (
      <Container>
          <div className="flex justify-between">
                <span>{locale["collaborator"]}</span>
                <span>{locale["date"]}</span>
                <span>{locale["hour"]}</span>
          </div>
          {  
            registers.map(register => {
                return <ListItem key={register.id} register={register} />
            })
          }
      </Container>
  );
}

export default List;