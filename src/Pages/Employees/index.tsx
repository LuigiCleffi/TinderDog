import { Grid } from "@nextui-org/react";
import { employees } from "../../assets/js/employeesInfo";
import CardComponent from "../../components/Card";

export default function EmployesPage() {
  return (
    <div className="flex mt-10 ">
      <Grid.Container justify="center" gap={4}>
        {employees.map((employee) => (
          <Grid key={employee.email} xs={12} sm={6} md={4} lg={3}>
            <CardComponent
              imgSrc={employee.foto}
              nome={employee.nome}
              email={employee.email}
              subObj={{ prop1: employee.subobjeto.propriedade1, prop2: employee.subobjeto.propriedade2 }}
            />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  )
}