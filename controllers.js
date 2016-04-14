var app = angular.module("Portfolio", []);

app.filter('to_trusted', ['$sce', function($sce){
  return function(text) {
    return $sce.trustAsHtml(text);
  };
}]);

app.controller('Corners', ['$scope', function($scope) {
  $scope.corners = [
    {
      id: 'intro_corner',
      span: 'Intro'
    },
    {
      id: 'projects_corner',
      span: 'Projects'
    },
    {
      id: 'about_corner',
      span: 'About'
    },
    {
      id: 'contact_corner',
      span: 'Contact'
    }
	];
}]);

app.controller('Skills', ['$scope', function($scope) {
  $scope.pointers = [
    {
      idPointer: 'tl',
      idImg: 'top_left'
    },
    {
      idPointer: 'bl',
      idImg: 'bottom_left'
    },
    {
      idPointer: 'b',
      idImg: 'bottom'
    },
    {
      idPointer: 'tr',
      idImg: 'top_right'
    },
    {
      idPointer: 'br',
      idImg: 'bottom_right'
    }
	];
  $scope.skills = [
    {
      id: 'html',
      span: 'HTML'
    },
    {
      id: 'css',
      span: 'CSS'
    },
    {
      id: 'javascript',
      span: 'JavaScript'
    },
    {
      id: 'jquery',
      span: 'jQuery'
    },
    {
      id: 'angular',
      span: 'AngularJS'
    }
  ];
  $scope.description = 'Click on a skill to see my proficiency';
}]);

app.controller('Tabs', ['$scope', function($scope) {
  $scope.tabs = [
    {
      id: 'intro',
      span: "Hi, I'm Simone.<br />I'm a fresh, junior, unbiased, self-taught <strong>web developer</strong> who likes to use adjectives.<br /><br />When I code, I see myself as an archer. (well I really am an archer, but that's a story for another time).<br />In the past few months, I've been collecting arrows and putting them in my 'quiver of wisdom', by studying <strong>JavaScript (and its frameworks), CSS3 and HTML5</strong>.<br /><br />If you are reading this, you are likely reviewing my application to work for your Company. I thank you very much for taking an interest in me, and I would like to show you that I am worthy of that interest.<br /><br />I am ready to learn new tricks, code for a living, and <strong>shoot the target</strong>!"
    },
    {
      id: 'about',
      span: "Fun facts and trivia about me!<br /><br />In 2013, I graduated in <strong>Psychology</strong> in Turin Italy. These studies allowed me to comprehend the human mind and behaviour, and gave me the tools to listen and care for other people, as well as to endure difficulties.<br />But I wanted more than to become a psychologist. So, to get some strong experience of a creative environment and put my ability to write to use, I joined an <strong>advertising agency</strong> as a copywriter. Amazing times, that I treasure dearly. They shaped my professional profile greatly - plus points for working with great people, too.<br /><br />Then, at the end of 2014, I decided to make a leap into the unknown and <strong>move to London</strong>. I was quickly hired as lettings administrator in an estate agency in Fulham, where I worked for seven months until September 2015. This was another important part of my life that made me grow on all fronts and get to know London's job market.<br /><br />Fast forward to now, with months of <strong>studying and learning and coding</strong> under my belt, and I am ready for the next step, the most important one. I aim to be hired as a developer.<br /><strong>It's what I like to do</strong>, simple as that. All I need is an opportunity."
    },
    {
      id: 'contact',
      span: "If you wish to reach me, the best way is to write an email to <a href='mailto:&#115;&#105;&#109;&#111;&#110;&#101;&#46;&#102;&#101;&#114;&#114;&#101;&#114;&#111;&#64;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#46;&#99;&#111;&#109;'><i>&#115;&#105;&#109;&#111;&#110;&#101;&#46;&#102;&#101;&#114;&#114;&#101;&#114;&#111;&#64;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#46;&#99;&#111;&#109;</i></a>.<br /><br />For other contact details, and more info, please see my CV <a target='_blank' href='cvsimoneferrero.pdf'><i>HERE</i></a>.<br /><br />I look forward to hearing from you!"
    }
	];
}]);

app.controller('Projects', ['$scope', function($scope) {
  $scope.title = 'Samples of my work.';
  $scope.projects = [
    {
      title: 'EasyRecipes',
      description: 'My first take on an AngularJS app. It allows to add and convert the quantity of ingredients according to the number of servings selected by the user.',
      link: 'easyrecipes/index.html',
      icon: 'easyrecipes_icon.png'
    },
    {
      title: 'The Decision Maker',
      description: 'A simple website with CSS and Javascript animations. The user can input any number of strings, one of which is chosen randomly by the program.',
      link: 'decisionmaker/index.html',
      icon: 'decision_maker_icon.png'
    },
    {
      title: 'A CSS Drawing',
      description: 'Although art is not my strong suit, in my free time I try to learn more about CSS by "painting" with it.',
      link: 'cssdrawing/index.html',
      icon: 'css_drawing_icon.png'
    }
	];
}]);
