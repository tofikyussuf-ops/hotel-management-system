import { useState } from 'react';
import CabinTable from '../features/cabins/CabinTable';
import CreateCabinForm from '../features/cabins/CreateCabinForm';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Cabins() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
      </Row>
      <CabinTable />
      <Button variation="secondary" onclick={() => setOpenForm(!openForm)} />
      {openForm && <CreateCabinForm />}
    </>
  );
}

export default Cabins;
