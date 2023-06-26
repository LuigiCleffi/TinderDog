import { Card, Grid, Text } from "@nextui-org/react";

export interface ICardComponent {
  imgSrc: string, nome: string, email: string, subObj: {
    prop1: string,
    prop2: string
  }
}

export default function CardComponent({ imgSrc, nome, email, subObj }: ICardComponent) {
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <img
          alt="nextui logo"
          src={imgSrc}
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {nome}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{email}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>Dono do cachorro: {subObj.prop1}</Text>
        <Text>Cuidador do cachorro: {subObj.prop2}</Text>
      </Card.Body>
    </Card>
  );
}
