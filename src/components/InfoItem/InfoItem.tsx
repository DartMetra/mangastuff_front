import { InfoKey, InfoValue, InfoWrap } from './style';

export function InfoItem({ caption, value }: { caption: string; value: string | string[] }) {
  return (
    <InfoWrap>
      <InfoKey>{caption}</InfoKey>
      {Array.isArray(value) ? value.map((e) => <InfoValue>{e}</InfoValue>) : <InfoValue>{value}</InfoValue>}
    </InfoWrap>
  );
}
