import { InfoKey, InfoValue, InfoWrap } from './style';

export function InfoItem({ caption, value }: { caption: string; value: string }) {
  return (
    <InfoWrap>
      <InfoKey>{caption}</InfoKey>
      <InfoValue>{value}</InfoValue>
    </InfoWrap>
  );
}
