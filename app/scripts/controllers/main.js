'use strict';

/**
 * @ngdoc function
 * @name fantasyBracketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fantasyBracketApp
 */
angular.module('fantasyBracket')
  .controller('MainCtrl', function () {
    const vm = this;

    vm.tournaments = [
      {name: 'Tournament of 2017', year: 2017, id: 'tourn-1', brackets: ['brk-1', 'brk-2', 'brk-3'], winner: null, second: null, third: null, loser: null}
    ];

    vm.brackets = [
      {name: 'Championships', rank: 1, conferences: ['conf-1', 'conf-2'], id: 'brk-1', players: 8},
      {name: 'Europa League', rank: 2, conferences: ['conf-1', 'conf-2'], id: 'brk-2', players: 8},
      {name: 'Flex Fox Vase', rank: 3, conferences: ['conf-1', 'conf-2'], id: 'brk-3', players: 4}
    ];

    vm.conferences = [
      {name: 'The Tough Customers', id: 'conf-1', divisions: ['div-1', 'div-2']},
      {name: 'Flex Fox Family', id: 'conf-2', divisions: ['div-3', 'div-4']}
    ];

    vm.divisions = [
      {name: 'Evil Division of Evil', id: 'div-1', players: ['plr-1', 'plr-2', 'plr-3', 'plr-4', 'plr-5']},
      {name: 'Twice the Division', id: 'div-2', players: ['plr-6', 'plr-7', 'plr-8', 'plr-9', 'plr-10']},
      {name: '[Redacted]', id: 'div-3', players: ['plr-11', 'plr-12', 'plr-13', 'plr-14', 'plr-15']},
      {name: 'Jeffrey Jungle', id: 'div-4', players: ['plr-16', 'plr-17', 'plr-18', 'plr-19', 'plr-20']}
    ];

    vm.players = [
      {teamName: 'Making Flex Fox Great Again', seed: null, id: 'plr-1', name: 'Jeremiah', conference: 'The Tough Customers', division: 'Evil Division of Evil'},

      {teamName: 'The Man', seed: null, id: 'plr-2', name: 'Nick', conference: 'The Tough Customers', division: 'Evil Division of Evil'},

      {teamName: 'Stubby Clapp Clappers', seed: null, id: 'plr-3', name: 'Garth M', conference: 'The Tough Customers', division: 'Evil Division of Evil'},

      {teamName: 'Emasculation Of The Man', seed: null, id: 'plr-4', name: 'Jatheesh', conference: 'The Tough Customers', division: 'Evil Division of Evil'},

      {teamName: 'Pitches Love Velocity', seed: null, id: 'plr-5', name: 'Wendy', conference: 'The Tough Customers', division: 'Evil Division of Evil'},

      {teamName: 'The Mad King', seed: null, id: 'plr-6', name: 'Ryan', conference: 'The Tough Customers', division: 'Twice the Division'},

      {teamName: 'Supa Hoyt Fire', seed: null, id: 'plr-7', name: 'Cam', conference: 'The Tough Customers', division: 'Twice the Division'},

      {teamName: 'The Duda Bides', seed: null, id: 'plr-8', name: 'Aidan', conference: 'The Tough Customers', division: 'Twice the Division'},

      {teamName: 'Money Ballers', seed: null, id: 'plr-9', name: 'Ash', conference: 'The Tough Customers', division: 'Twice the Division'},

      {teamName: 'Mookie Monster', seed: null, id: 'plr-10', name: 'Wes', conference: 'The Tough Customers', division: 'Twice the Division'},

      {teamName: 'Bash Brothers', seed: null, id: 'plr-11', name: 'Richard K-R', conference: 'Flex Fox Family', division: '[Redacted]'},

      {teamName: 'Kongo Kommunity Kollege', seed: null, id: 'plr-12', name: 'Flex', conference: 'Flex Fox Family', division: '[Redacted]'},

      {teamName: 'The Illuminati', seed: null, id: 'plr-13', name: 'Mike', conference: 'Flex Fox Family', division: '[Redacted]'},

      {teamName: 'Soler Powered', seed: null, id: 'plr-14', name: 'Garth N', conference: 'Flex Fox Family', division: '[Redacted]'},

      {teamName: 'Life Is Sad Without Donkeys', seed: null, id: 'plr-15', name: 'Ian', conference: 'Flex Fox Family', division: '[Redacted]'},

      {teamName: 'The New Day', seed: null, id: 'plr-16', name: 'Jemil', conference: 'Flex Fox Family', division: 'Jeffrey Jungle'},

      {teamName: 'BILLIARDS BOY1969', seed: null, id: 'plr-17', name: 'Chris', conference: 'Flex Fox Family', division: 'Jeffrey Jungle'},

      {teamName: 'League Champion', seed: null, id: 'plr-18', name: 'Chow', conference: 'Flex Fox Family', division: 'Jeffrey Jungle'},

      {teamName: 'Big Baller Brand', seed: null, id: 'plr-19', name: 'Richard T', conference: 'Flex Fox Family', division: 'Jeffrey Jungle'},

      {teamName: 'Hello Darkness, My Old Friend', seed: null, id: 'plr-20', name: 'Lim', conference: 'Flex Fox Family', division: 'Jeffrey Jungle'}
    ];


  });
