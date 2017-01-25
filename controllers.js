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
      id: 'skill1',
      span: 'HTML/CSS'
    },
    {
      id: 'skill2',
      span: 'JS/jQuery'
    },
    {
      id: 'skill3',
      span: 'PHP'
    },
    {
      id: 'skill4',
      span: 'AngularJS'
    },
    {
      id: 'skill5',
      span: 'ReactJS'
    }
  ];
  $scope.description = 'Click on a skill to see my proficiency';
}]);

app.controller('Tabs', ['$scope', function($scope) {
  $scope.tabs = [
    {
      id: 'intro',
      span: "Hi, I'm Simone.<br />I'm a driven, hungry, junior, ~young (*uhm...*) <strong>web developer</strong> who likes to use adjectives.<br /><br />When I code, I see myself as an archer. (well I really am an archer, but that's a story for another time).<br />My arrows? <strong>JavaScript (and its main frameworks), PHP, CSS3, HTML5</strong>... And any other technology I can put my hands on!<br /><br />If you are reading this, I thank you very much for taking an interest in me: I'd be happy to hear from you and get all chitty-chatty about our passion for programming.<br /><br />In the meanwhile, you'll find me doing what I love most: <strong>shooting the target</strong>!"
    },
    {
      id: 'about',
      span: "Fun facts and trivia about me!<br /><br />In 2013, I graduated in <strong>Psychology</strong> in Turin Italy. These studies allowed me to comprehend the human mind and behaviour, and gave me the tools to listen and care for other people, as well as to endure difficulties.<br />But I wanted more than to become a psychologist. So, to get some strong experience of a creative environment and put my ability to write to use, I joined an <strong>advertising agency</strong> as a copywriter. Amazing times, that I treasure dearly. They shaped my professional profile greatly - plus points for working with great people, too.<br /><br />Then, at the end of 2014, I decided to make a leap into the unknown and <strong>move to London</strong>. I was quickly hired as lettings administrator in an estate agency in Fulham, where I worked for seven months until September 2015. This was another important part of my life that made me grow on all fronts and get to know London's job market.<br /><br />Now I'm employed at the University of London, and I finally made it into the <b>Software development</b> world. Who knows what the future will hold next for me?"
    },
    {
      id: 'contact',
      span: "If you wish to reach me, write an email to <a href='mailto:&#115;&#105;&#109;&#111;&#110;&#101;&#46;&#102;&#101;&#114;&#114;&#101;&#114;&#111;&#64;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#46;&#99;&#111;&#109;'><b><u>&#115;&#105;&#109;&#111;&#110;&#101;&#46;&#102;&#101;&#114;&#114;&#101;&#114;&#111;&#64;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#46;&#99;&#111;&#109;</u></b></a>.<br /><br />For other contact details, and more info, please see <a target='_blank' href='cvsimoneferrero.pdf'><b><u>my CV</u></b></a>.<br /><br />You can also check out my experience on <a target='_blank' href='https://www.linkedin.com/in/simone-ferrero/'><b><u>LinkedIn</u></b></a>, or see what I'm working on on <a target='_blank' href='https://www.github.com/simoneferrero'><b><u>GitHub</u></b></a>.<br /><br />I look forward to hearing from you!"
    }
	];
}]);

app.controller('Projects', ['$scope', function($scope) {
  $scope.title = 'Samples of my work.';
  $scope.projects = [
    {
      title: 'Yahtzee Point Scorer',
      description: "(Work in progress: no CSS, no IE support, logic to be refactored) I wanted to learn ReactJS and Bootstrap, and I wanted a better way to track Yahtzee points. Double score!",
      link: 'yahtzee/index.html',
      icon: 'yahtzee_icon.png'
    },
    {
      title: 'Super Awesome Blackjack',
      description: "(Work in progress: missing features, not responsive, no IE support, no animations) This is my most ambitious project to date. A fully working Blackjack web application. Let's play!",
      link: 'blackjack/index.html',
      icon: 'blackjack_icon.png'
    },
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
