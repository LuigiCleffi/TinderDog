import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Loading from "../../components/Loading";
import { Button, Dropdown, Table } from "@nextui-org/react";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { MagnifyingGlassIcon, PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import NotFound from "./components/IdNotFound";
import { deleteItem, fetchItem } from "../../services/api.service";
import RegisterUser from "./components/RegisterUser";

export type EmployeesDTO = {
  id: string;
  nome: string;
  departamento: string;
  endereco: string;
  email: string;
};

const queryClient = new QueryClient();

const RegisterPage: React.FC = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmployeeId(searchQuery.trim());
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="m-auto my-12 w-1/3">
        <form onSubmit={handleFormSubmit} className="gap-5 flex h-12">
          <input
            type="text"
            className="w-full bg-gray-100 rounded-md border-2 border-gray-200 py-2 px-4 placeholder-gray-400 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500 transition-colors duration-300 ease-in-out"
            placeholder="Search for an employee"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            css={{ height: '100%' }}
            color="gradient"
            size="xs"
          >
            <MagnifyingGlassIcon className="h-4" />
          </Button>
          <RegisterUser employeeId={employeeId} />

        </form>
      </div>
      {employeeId && <RegisterEmployees employeeId={employeeId} />}
    </QueryClientProvider>
  );
};

const columns = [
  {
    key: "name",
    label: "NAME"
  },
  {
    key: "section",
    label: "SECTION"
  },
  {
    key: "email",
    label: "EMAIL"
  },
  {
    key: "address",
    label: "ADDRESS"
  },
  {
    key: "actions",
    label: "ACTIONS"
  },
]
function RegisterEmployees({ employeeId }: { employeeId: string }) {

  const { isLoading, error, data, refetch } = useQuery<EmployeesDTO>(
    ["cadastro", employeeId],
    () => fetchItem<EmployeesDTO>(`https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/${employeeId}`),
    { refetchOnWindowFocus: false, enabled: !!employeeId }
  )
  const deleteEmployee = async () => {
    try {
      const response = await deleteItem(`https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/${employeeId}`);

      if (response.status === 200) {
        console.log("Exclusão bem-sucedida");
        const data = await response.data;
        console.log("Resposta JSON:", data);
        if (data.status === "Ok") {
          console.log("Status: Ok");
        } else {
          console.log("Status: Erro");
        }
      } else {
        console.log("Erro na exclusão. Status:", response.status);
      }

      refetch();
    } catch (error) {
      console.error("Ocorreu um erro ao excluir o funcionário:", error);
    }
  };


  if (isLoading) return <Loading />;
  if (error) return <div>An error has occurred:</div>;

  if (!data?.id) return <NotFound employeeId={employeeId} />;

  return (
    <div className="p-12">
      <Table
        aria-label="Example table with static content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )}
        </Table.Header>
        <Table.Body>
          <Table.Row key={data.id}>
            <Table.Cell>{data.nome}</Table.Cell>
            <Table.Cell>{data.departamento}</Table.Cell>
            <Table.Cell>{data.email}</Table.Cell>
            <Table.Cell>{data.endereco}</Table.Cell>
            <Table.Cell >
              <DropDownActions onDelete={deleteEmployee} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
const DropDownActions: React.FC<{ onDelete: () => void }> = ({ onDelete }) => {
  const [selected, setSelected] = useState<any>(new Set(["Delete"]));

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replace("_", " "),
    [selected]
  );

  const handleDelete = () => {
    onDelete();
  }


  return (
    <>
      <Dropdown>
        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
          {selectedValue}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label="Single selection actions"
          color="secondary"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          css={{
            gap: "$1",
            p: "$8",
          }}
        >
          <Dropdown.Item as="button" key="delete" icon={<TrashIcon className="h-6 text-purple-800" />} css={{
            width: "100%"
          }} >
            <button className="flex justify-between text-md font-bold text-red-700 w-full" onClick={handleDelete}>
              Delete Item
            </button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </>
  );
};
export default RegisterPage;