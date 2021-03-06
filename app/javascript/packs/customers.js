import "hello_angular/polyfills";
import {Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

var CustomerSearchComponent = Component({
  selector: "shine-customer-search",
  template: ' \
<header> \
  <h1 class="h2">Customer Search</h1> \
</header> \
<section class="search-form">\
  <form>\
    <div class="input-group input-group-lg">\
      <label for="keywords" class="sr-only">Keywords></label>
      <input type="text" id="keywords" name="keywords" \
          placeholder="Frst Name, Last Name, or Email Address"\
          class="form-control input-lg" \
          bindon-ngModel="keywords"> \
      <span class="input-group-btn"> \
        <input type="submit" value="Find Customers" \
            class="btn btn-primary btn-lg" \
            on-click="search()"> \
      </span>\
    </div>\
  </form>\
</section>\
<section	class="search-results">	\
		<header>	\
				<h1	class="h3">Results</h1>	\
		</header>	\
		<ol	class="list-group">	\
				<li	class="list-group-item	clearfix">	\
						<h3	class="pull-right">	\
								<small	class="text-uppercase">Joined</small>	\
								2016-01-01\
						</h3>	\
						<h2	class="h3">	\
								Pat	Smith\
								<small>psmith34</small>	\
						</h2>	\
						<h4>pat.smith@example.com</h4>	\
				</li>	\
		</ol>	\
</section>	\
 '
}).Class({
  constructor: function(){
    this.keywords = null;

  },
  search: function(){
    alert("Searched for: " + this.keywords);
  }
})
var​ 	CustomerAppModule	=	NgModule({
		imports:						[	BrowserModule,	FormsModule	],
		declarations:	[	CustomerSearchComponent	],
		bootstrap:				[	CustomerSearchComponent	]
})
.Class({
		constructor:	​ function​ ()	{}
});
