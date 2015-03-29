/*
 * AllmightyBot Node - https://github.com/RyanTheAllmighty/AllmightyBot-Node
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

'use strict';

var format = require('string-format');
format.extend(String.prototype);

var listeners = require('./listeners');

var connection = require('./inc/connection');

listeners.forEach(function (listener) {
    console.log('Loading listener ' + listener)
    connection.client.addListener(listener.listening_for, listener.callback);
});

console.log('Bot finished loading all the listeners');

connection.client.connect();