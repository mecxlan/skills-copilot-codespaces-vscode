function skillsMember() {
  return {
    restrict: 'E',
    trmplateUrl: 'modules/skills/views/member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: ',,'
    }
  };
}
