import ListGroup from "./ListGroup";

function App() {
  const companies = ["Xiaomi", "Seiko", "LG", "Vivo", "Audi"];
  const handleSelectItem = (item: string) => console.log(item);

  return (
    <>
      <ListGroup onSelectItem={handleSelectItem} title="Companies" items={companies} />
    </>
  );
}

export default App;
