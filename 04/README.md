> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s5e12-php-js-the-dom` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#04` PHP: JavaScript, All About Objects

Tym razem nasz formularz to panel rejestracji do serwisu.

Aby można było się zarejestrować, należy:
- wprowadzić poprawny adres e-mail (sprawdź, czy adres zawiera znak @ lub użyj odpowiedniego [wyrażenia regularnego](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)),
- podać dwa razy takie samo hasło (dla pewności, że użytkownik się nie pomylił), które jest dłuższe niż 6 znaków,
- zaakceptować regulamin (sprawdź, czy checkbox został zaznaczony: `checked`).

Jeśli warunki zostały spełnione, wyświetl w konsoli napis `done`. Jeśli nie – zaznacz na czerwono kolor fontu dla `<label>` przy błędnie wprowadzonych danych.

Do rozwiązania problemu oznaczania błędnych elementów możesz użyć tablicy, która będzie przechowywać dane, tj. `const errors = []`. W momencie wystąpienia błędu dodasz do tej tablicy selektor pola, które zostało błędnie wypełnione. Na samym końcu wykonasz pętlę (`for` lub `forEach`), która zaznaczy elementy z błędem.

&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **Wideo**, znajdziesz je na stronie [laracasts.com](https://laracasts.com/referral/bogolubow)*

> :arrow_left: [*poprzednie zadanie*](./../03) | [*następne zadanie*](./../05) :arrow_right:
