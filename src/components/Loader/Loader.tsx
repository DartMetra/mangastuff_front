import { LoaderWrap } from './style';
import { Oval } from 'react-loader-spinner';
import { colors } from '..';

export function Loader() {
  return (
    <LoaderWrap>
      <Oval color={`${colors.loader}`} secondaryColor={`${colors.loader2}`} height={80} width={80} />
    </LoaderWrap>
  );
}
