import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';
// Serializer in unit tests
Enzyme.configure({ adapter: new Adapter() });
// expect.addS

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));