"use strict";

var chai = require("chai"),
	expect = chai.expect,
	sinon = require("sinon");

chai.config.includeStack = true;

var lambda = require("../index");

describe("index.js", function(){

	var callback;

	beforeEach(function(){
		callback = sinon.spy();
	});

	it("should return helloworld JSON when called", function(){
		var expected = {
			"result" : "helloworld"
		};

		lambda.handler(null, null, callback);

		expect(callback.calledWith(expected)).to.be.true;
	});
});