# Instrument Studies for Eyes and Ears

## Overview
Instrument Studies for Eyes and Ears (ISFEE) is an orchestration resource for composers. The site contains score excerpts, videos, and descriptions for every common orchestral instrument, and demonstrates the possisble standard and extended techniques of the various instruments. Each instrument page contains basic information about ranges, sound production, and standard articulations.

## Setup
To install the necessary dependencies, run `npm start`.

The email form in `src/contact.js` will not work because there is no `.env` file. To make the form function correctly, create an EmailJS account and add a default template. Then create a `.env` file in the home directory (at the same level as `package.json`) with the contents:

```
REACT_APP_EMAILJS_PUBLIC_KEY=<EmailJS public key>
REACT_APP_EMAILJS_TEMPLATE_ID=<EmailJS template ID>
```

## Credits
Created by Don Freund
Site designed by Reid Merzbacher
Pages assembled by Don Freund, Reid Merzbacher, Felipe Tovar-Henao, and Jeff Sabol
