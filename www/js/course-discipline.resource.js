"use strict";appResources.factory("CourseDiscipline",["$resource","appConfig",function(o,s){return o("{0}/locations/:locationId/courses/:courseId/course_disciplines".format([s.backendURL]))}]);