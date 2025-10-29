import React from 'react';
import { LoadingOutlined, Spin } from 'components'

const Loading: React.FC = () => (
  <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }}/>} size="large" fullscreen />
);

export default Loading;