import { LoaderWrap } from './style';
import { Oval } from 'react-loader-spinner';

export function Loader() {
  return (
    <LoaderWrap>
      <Oval color="#00BFFF" height={80} width={80} />
    </LoaderWrap>
  );
}
