function skillsMember() {
  return {
    restrict: 'E',  // Specifies that this directive will be used as an element
    templateUrl: 'modules/skills/views/member.html',  // Corrected typo in property name
    controller: 'SkillsMemberController',  // The controller for this directive
    controllerAs: 'vm',  // Alias for the controller
    bindToController: true,  // Binds the scope properties to the controller instance
    scope: {
      member: '='  // Creates a two-way data binding for the 'member' attribute
    }
  };
}
