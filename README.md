# TypeScript-Todo-Training

Du schreibst den Anwendungscode selbst. Im Moment bearbeiten wir nur Aufgabe 1.

## Start

Oeffne diesen Ordner in VS Code und dort ein neues Terminal.
Der Terminalordner muss A:\Dev\Projects\typescript-todo-training sein.

- `npm start`: Fuehrt src/index.ts aus. Die leere Vorlage gibt noch nichts aus.
- `npm run typecheck`: Prueft die TypeScript-Typen. Erstellt keine JavaScript-Dateien.
- `npm run dev`: Fuehrt den Code beim Speichern erneut aus (beenden mit Strg+C).

## Aufgabe 1

Erstelle drei Variablen fuer deinen Namen, dein Alter und die Aussage, ob du gerade
TypeScript lernst. Verwende ausdruecklich die passenden Typen string, number und
boolean. Gib alle drei Werte mit console.log() aus.

Die TODO-Kommentare stehen in src/index.ts. Dort schreibst du deinen Code.
Sende danach deinen Code oder bitte um eine Pruefung der Datei.
Bei Fehlern bekommst du zuerst eine Erklaerung und einen Hinweis, keine fertige Loesung.
Wir bearbeiten die naechste Aufgabe erst nach diesem Schritt.

## Vorbereitung

Node.js, TypeScript, tsx und @types/node sind die einzige technische Grundlage.
strict aktiviert die strenge Typpruefung. tsx fuehrt den Code aus; die separate
Typpruefung erfolgt ueber npm run typecheck.
Projekte und npm-Cache liegen auf A:.

## Starten per Knopf

Links 'Ausfuehren und Debuggen' oeffnen (Strg+Umschalt+D),
'TypeScript starten' auswaehlen und auf das gruene Dreieck klicken.
Strg+F5 startet ohne Debugger; F5 startet mit Debugger.
Die Ausgabe erscheint im Terminal. Die Typpruefung bleibt npm run typecheck.
