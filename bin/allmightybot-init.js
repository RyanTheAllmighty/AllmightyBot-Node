/*
 * AllmightyBot - https://github.com/RyanTheAllmighty/AllmightyBot
 * Copyright (C) 2015 RyanTheAllmighty
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

(function () {
    'use strict';

    const inquirer = require('inquirer');

    const modules = require('../inc/modules');

    let typeQuestion = {
        type: 'list',
        name: 'module',
        message: 'Where will this bot be used?',
        choices: [
            {
                name: 'Twitch.tv',
                value: 'twitchtv'
            },
            {
                name: 'Beam.pro',
                value: 'beampro'
            },
            {
                name: 'Livecoding.tv',
                value: 'livecodingtv'
            },
            {
                name: 'IRC',
                value: 'irc'
            }
        ]
    };

    // Prompt for the type and then run the questions and process the answers for the given module
    inquirer.prompt(typeQuestion, function (answer) {
        console.log();

        if (!modules[answer.module]) {
            return console.error(`No module found for '${answer.module}'!`);
        }

        if (!modules[answer.module].init) {
            return console.error(`No initialisation parameters found for module '${answer.module}'!`);
        }

        inquirer.prompt(modules[answer.module].init.questions, modules[answer.module].init.processAnswers);
    });
})();