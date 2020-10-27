import React, { useState } from 'react';
import * as ui from './ui';

const genderWords = [
  'he',
  'she',
  'mr.',
  'mister',
  'miss',
  'mrs.',
  'her',
  'his',
  'man',
  'men',
  'woman',
  'women',
  'brother',
  'brothers',
  'sister',
  'sisters',
  'son',
  'sons',
  'daughter',
  'daughters',
];

const genderOppositeLookupTable = {
  he: 'she',
  she: 'he',
  'mr.': 'mrs.',
  mister: 'miss',
  'mrs.': 'mr.',
  miss: 'mister',
  his: 'her',
  her: 'his',
  man: 'woman',
  men: 'women',
  woman: 'man',
  women: 'men',
  brother: 'sister',
  brothers: 'sisters',
  sister: 'brother',
  sisters: 'brothers',
  son: 'daughter',
  sons: 'daughters',
  daughter: 'son',
  daughters: 'sons',
};

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleOnInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleOnclick = () => {
    const genderSwappedText = swapGenders(inputText);
    setOutputText(genderSwappedText);
  };

  const swapGenders = (text) => {
    const unifiedText = text.split(' ');

    unifiedText.map((word, index) => {
      if (genderWords.includes(word.toLowerCase())) {
        const swappedWord = genderOppositeLookupTable[word.toLowerCase()];

        unifiedText.splice(index, 1, swappedWord);
      }
      return unifiedText;
    });

    return unifiedText.join(' ');
  };

  return (
    <ui.Main>
      <h1>Swap the genders</h1>
      <p>
        This little web app is a small tool to{' '}
        <strong>change the gender</strong> in any text you give it.
      </p>

      <ui.Form>
        <ui.Label htmlFor='inputtext'>
          Insert the text you want to swap the genders for here:
        </ui.Label>
        <ui.Textarea
          id='inputtext'
          onChange={(e) => handleOnInputChange(e)}
          value={inputText}
        />

        <ui.Button
          type='button'
          onClick={handleOnclick}
          disabled={inputText === ''}
        >
          Swap
        </ui.Button>

        <ui.Label htmlFor='outputtext'>
          Here is your gender swapped text:
        </ui.Label>
        <ui.Textarea id='outputtext' value={outputText} readOnly />
      </ui.Form>
      <p>
        This idea is highliy inspired by Karrie Fransman's and Jonathan
        Plackett's <strong>wonderful book:</strong>{' '}
        <ui.Link href='http://www.karriefransman.com/project/gender-swapped-fairy-tales/'>
          Gender Swapped Fairy Tales
          <img
            alt='book cover of gender swapped fairy tales'
            src='http://books.google.com/books/content?id=7lBMzQEACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE70iLhMxyuK-k_m7YtXTsaxRK4ZWTcxWla_Vf9yfDP5YMpkswnNuPARHup366VvrqVTuT-6eW3vX9LBgBPDZ1Sp4C80EfCigobeYLgWcNA90wrBWBAwW-A1L4xcfjfgw1LBPKsbV&source=gbs_api'
          />
          Go buy it!
        </ui.Link>
      </p>
    </ui.Main>
  );
}

export default App;
