import React, { useState } from 'react';
import * as ui from './ui';

const genderWords = [
  'he',
  'she',
  'mr.',
  'mr',
  'mister',
  'miss',
  'mrs.',
  'mrs',
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
  mr: 'mrs',
  mister: 'miss',
  'mrs.': 'mr.',
  mrs: 'mr',
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
      <ui.Content>
        <ui.Header>
          <ui.Headline>Swap the genders</ui.Headline>
          <p>
            This little web app is a small tool to{' '}
            <strong>change the gender</strong> in any text you give it.
          </p>
        </ui.Header>

        <ui.Form>
          <ui.Fieldset>
            <ui.Label htmlFor='inputtext'>1. Insert your text here:</ui.Label>
            <ui.Textarea
              id='inputtext'
              placeholder='He is a man'
              onChange={(e) => handleOnInputChange(e)}
              value={inputText}
            />
          </ui.Fieldset>

          <ui.Button
            type='button'
            onClick={handleOnclick}
            disabled={inputText === ''}
          >
            Swap
          </ui.Button>

          <ui.Fieldset>
            <ui.Label htmlFor='outputtext'>
              2. Here is your gender swapped text:
            </ui.Label>
            <ui.Textarea
              id='outputtext'
              placeholder='She is a woman'
              value={outputText}
              readOnly
            />
          </ui.Fieldset>
        </ui.Form>

        <ui.Paragraph>
          This idea is highly inspired by Karrie Fransman's and Jonathan
          Plackett's <strong>wonderful book:</strong>{' '}
          <ui.Link
            href='https://genderswappedstories.com/'
            target='_blank'
            rel='noopener noreferer'
          >
            Gender Swapped Fairy Tales
            <img
              alt='book cover of gender swapped fairy tales'
              src='https://books.google.com/books/content?id=7lBMzQEACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE70iLhMxyuK-k_m7YtXTsaxRK4ZWTcxWla_Vf9yfDP5YMpkswnNuPARHup366VvrqVTuT-6eW3vX9LBgBPDZ1Sp4C80EfCigobeYLgWcNA90wrBWBAwW-A1L4xcfjfgw1LBPKsbV&source=gbs_api'
            />
            Go buy it!
          </ui.Link>
        </ui.Paragraph>
      </ui.Content>

      <ui.Footer>
        <nav>
          <ui.List>
            <li>
              <a
                href='https://marcokuehbauch.com/about'
                target='_blank'
                rel='noopener noreferrer'
              >
                Made by Marco
              </a>
            </li>
            <li>
              <a
                href='https://github.com/mkuehb/swapthegenders'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/Mkuehb'
                target='_blank'
                rel='noopener noreferrer'
              >
                Twitter
              </a>
            </li>
          </ui.List>
        </nav>
      </ui.Footer>
    </ui.Main>
  );
}

export default App;
