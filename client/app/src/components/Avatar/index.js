import React, { useCallback } from 'react';
import { Avatar as AntAvatar, Image } from 'antd';
import { DEFAULT_SRC } from '../../shared/constants';

import { Container, DefaultAvatar } from './styles';

function Avatar({ name, src, ...props}) {

  const getAvatarFromName = useCallback((fullName) => {
    const [firstName, lastName] = fullName.split(' ');
    return fullName.split(' ').length > 1 ? firstName.substring(0,1) + lastName.substring(0,1) : fullName.substring(0,2);
  }, [name])

  if(!src && name) {
    return (
      <Container>
          <DefaultAvatar {...props}>
            <span>{getAvatarFromName(name)}</span>
          </DefaultAvatar>
      </Container>
    )
  }

  return (
    <Container>
        <AntAvatar src={<Image src={src || DEFAULT_SRC } style={props.style} />} {...props} />
    </Container>
  );
}

export default React.memo(Avatar);