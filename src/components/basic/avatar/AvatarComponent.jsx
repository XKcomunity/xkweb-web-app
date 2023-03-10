import Avatar from 'react-avatar';

function AvatarComponent(props) {
  return (
    <Avatar
      name={props.name}
      round={true}
      size={250}
      textSizeRatio={2}
      color={'gray'}
      style={{ fontSize: '100px' }}
    />
  );
}

export default AvatarComponent;