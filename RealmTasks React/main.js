////////////////////////////////////////////////////////////////////////////
//
// Copyright 2016 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

'use strict';

import { AppRegistry } from 'react-native';
import TodoApp from './components/todo-app';
import LoginScreen from './components/login';

AppRegistry.registerComponent('ReactExample', () => LoginScreen);

// uncomment for no-login admin access (see realm.js)
// const RealmTasks = require('./components/realm-tasks');
// var adminToken = "YourHexSecretHere==";
// var adminUser = Realm.Sync.User.adminUser(adminToken);
// RealmTasks.connect(adminUser, ()=>{} );
// AppRegistry.registerComponent('ReactExample', () => TodoApp); // FIXME props?!!  
