import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';

const numberCollection = new NumberCollection([10, 203, 45, -3]);
numberCollection.sort();
console.log(numberCollection.data);

const characterCollection = new CharactersCollection('asdfgnt9');
characterCollection.sort();
console.log(characterCollection.data);
