const { execPath } = require("process")

var json ={
	"swagger": "2.0",
	"info": {
		"version": "1.0",
		"title": "swagger接口文档",
		"contact": {
			"name": "test",
			"email": "test@wengegroup.com"
		}
	},
	"host": "hongqiplus.wengegroup.com",
	"basePath": "/",
	"tags": [
        {
		"name": "activity-recruit-app-controller",
		"description": "活动招募表 app API"
	}, {
		"name": "activity-recruit-web-controller",
		"description": "活动招募表 web API"
	}, {
		"name": "activity-registration-app-controller",
		"description": "活动志愿者报名表 app API"
	}, {
		"name": "activity-registration-web-controller",
		"description": "活动志愿者报名表 web API"
	}, {
		"name": "activity-sign-in-app-controller",
		"description": "活动签到表 app API"
	}, {
		"name": "activity-sign-in-detail-app-controller",
		"description": "活动签到明细表 app API"
	}, {
		"name": "activity-sign-in-detail-web-controller",
		"description": "活动签到明细表 web API"
	}, {
		"name": "activity-sign-in-web-controller",
		"description": "活动签到表 web API"
	}, {
		"name": "admin-practice-position-web-controller",
		"description": "管理员-实践阵地 API"
	}, {
		"name": "admin-role-info-controller",
		"description": "Admin Role Info Controller"
	}, {
		"name": "admin-voluntary-management-web-controller",
		"description": "管理员-志愿管理 API"
	}, {
		"name": "civilization-class-app-controller",
		"description": "文明课堂 app API"
	}, {
		"name": "civilization-class-web-controller",
		"description": "文明课堂 web API"
	}, {
		"name": "civilization-list-app-controller",
		"description": "榜单配置 app API"
	}, {
		"name": "civilization-list-web-controller",
		"description": "榜单配置 web API"
	}, {
		"name": "civilization-moment-app-controller",
		"description": "文明瞬间 app API"
	}, {
		"name": "civilization-moment-web-controller",
		"description": "文明瞬间 web API"
	}, {
		"name": "clues-web-controller",
		"description": "线索 web API"
	}, {
		"name": "consulting-release-app-controller",
		"description": "咨询发布 app API"
	}, {
		"name": "consulting-release-web-controller",
		"description": "咨询发布 web API"
	}, {
		"name": "credit-hours-data-web-controller",
		"description": "信用时数数据表 web API"
	}, {
		"name": "currency-areas-controller",
		"description": "Currency Areas Controller"
	}, {
		"name": "currency-cities-controller",
		"description": "Currency Cities Controller"
	}, {
		"name": "currency-provinces-controller",
		"description": "Currency Provinces Controller"
	}, {
		"name": "data-center-web-controller",
		"description": "数据统计 web API"
	}, {
		"name": "fabulous-controller",
		"description": "Fabulous Controller"
	}, {
		"name": "file-upload-controller",
		"description": "File Upload Controller"
	}, {
		"name": "home-app-controller",
		"description": "首页 app API"
	}, {
		"name": "home-banner-web-controller",
		"description": "首页轮播图 web API"
	}, {
		"name": "home-configuration-web-controller",
		"description": "首页配置 web API"
	}, {
		"name": "home-navigation-web-controller",
		"description": "首页导航、快捷入口、列表配置 web API"
	}, {
		"name": "home-web-controller",
		"description": "首页 web API"
	}, {
		"name": "likes-app-controller",
		"description": "点赞表 App API"
	}, {
		"name": "list-configuration-app-controller",
		"description": "榜单配置 app API"
	}, {
		"name": "list-configuration-web-controller",
		"description": "榜单配置 web API"
	}, {
		"name": "list-type-web-controller",
		"description": "榜单类型 web API"
	}, {
		"name": "order-manage-app-controller",
		"description": "点单管理表 app API"
	}, {
		"name": "order-manage-evaluate-app-controller",
		"description": "Order Manage Evaluate App Controller"
	}, {
		"name": "order-manage-web-controller",
		"description": "点单管理表 web API"
	}, {
		"name": "organization-information-perfect-controller",
		"description": "Organization Information Perfect Controller"
	}, {
		"name": "practice-position-app-controller",
		"description": "实践阵地App API"
	}, {
		"name": "practice-position-web-controller",
		"description": "实践阵地Web API"
	}, {
		"name": "practice-ranking-appcontroller",
		"description": "实践排行 app API"
	}, {
		"name": "region-app-controller",
		"description": "Region App Controller"
	}, {
		"name": "region-web-controller",
		"description": "Region Web Controller"
	}, {
		"name": "service-manage-app-controller",
		"description": "服务管理表 app API"
	}, {
		"name": "service-manage-web-controller",
		"description": "服务管理表 web API"
	}, {
		"name": "tenant-configuration-controller",
		"description": "Tenant Configuration Controller"
	}, {
		"name": "type-configuration-app-controller",
		"description": "类型配置 app API"
	}, {
		"name": "type-configuration-web-controller",
		"description": "类型配置 web API"
	}, {
		"name": "user-app-controller",
		"description": "用户 app API"
	}, {
		"name": "user-role-info-app-controller",
		"description": "用户角色 app API"
	}, {
		"name": "user-web-controller",
		"description": "用户 web API"
	}, {
		"name": "volunteer-app-controller",
		"description": "志愿者管理表 app API"
	}, {
		"name": "volunteer-audit-controller",
		"description": "Volunteer Audit Controller"
	}, {
		"name": "volunteer-team-audit-web-controller",
		"description": "志愿队伍-队伍审核表 API"
	}, {
		"name": "volunteer-team-external-top-organization-controller",
		"description": "Volunteer Team External Top Organization Controller"
	}, {
		"name": "volunteer-team-in-app-controller",
		"description": "志愿队伍-队伍入驻表 app API"
	}, {
		"name": "volunteer-team-in-web-controller",
		"description": "志愿队伍-队伍入驻表 web API"
	}, {
		"name": "volunteer-team-management-app-controller",
		"description": "志愿队伍-队伍管理表 app API"
	}, {
		"name": "volunteer-team-management-web-controller",
		"description": "志愿队伍-队伍管理表 web API"
	}, {
		"name": "volunteer-web-controller",
		"description": "志愿者管理表 web API"
	}, {
		"name": "wish-manage-app-controller",
		"description": "心愿列表 app API"
	}, {
		"name": "wish-manage-web-controller",
		"description": "心愿列表 web API"
	}],
	"paths": {
		"/adminRoleInfo/add": {
			"post": {
				"tags": ["admin-role-info-controller"],
				"summary": "添加AdminRoleInfo对象",
				"description": "添加WEB用户角色表",
				"operationId": "addAdminRoleInfoUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "adminRoleInfo",
					"description": "adminRoleInfo",
					"required": true,
					"schema": {
						"$ref": "#/definitions/AdminRoleInfo对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/adminRoleInfo/delete/{id}": {
			"post": {
				"tags": ["admin-role-info-controller"],
				"summary": "删除AdminRoleInfo对象",
				"description": "删除WEB用户角色表",
				"operationId": "deleteAdminRoleInfoUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/adminRoleInfo/getPageList": {
			"post": {
				"tags": ["admin-role-info-controller"],
				"summary": "获取AdminRoleInfo分页列表",
				"description": "WEB用户角色表分页列表",
				"operationId": "getAdminRoleInfoPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "adminRoleInfoQueryParam",
					"description": "adminRoleInfoQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/AdminRoleInfoQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/AdminRoleInfo对象"
						}
					}
				}
			}
		},
		"/adminRoleInfo/info/{id}": {
			"get": {
				"tags": ["admin-role-info-controller"],
				"summary": "获取AdminRoleInfo对象详情",
				"description": "查看WEB用户角色表",
				"operationId": "getAdminRoleInfoUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/adminRoleInfo/update": {
			"post": {
				"tags": ["admin-role-info-controller"],
				"summary": "修改AdminRoleInfo对象",
				"description": "修改WEB用户角色表",
				"operationId": "updateAdminRoleInfoUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "adminRoleInfo",
					"description": "adminRoleInfo",
					"required": true,
					"schema": {
						"$ref": "#/definitions/AdminRoleInfo对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/currencyAreas/add": {
			"post": {
				"tags": ["currency-areas-controller"],
				"summary": "添加CurrencyAreas对象",
				"description": "添加通用区级表",
				"operationId": "addCurrencyAreasUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "currencyAreas",
					"description": "currencyAreas",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CurrencyAreas对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/currencyAreas/delete/{id}": {
			"post": {
				"tags": ["currency-areas-controller"],
				"summary": "删除CurrencyAreas对象",
				"description": "删除通用区级表",
				"operationId": "deleteCurrencyAreasUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/currencyAreas/info/{id}": {
			"get": {
				"tags": ["currency-areas-controller"],
				"summary": "获取CurrencyAreas对象详情",
				"description": "查看通用区级表",
				"operationId": "getCurrencyAreasUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/currencyAreas/update": {
			"post": {
				"tags": ["currency-areas-controller"],
				"summary": "修改CurrencyAreas对象",
				"description": "修改通用区级表",
				"operationId": "updateCurrencyAreasUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "currencyAreas",
					"description": "currencyAreas",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CurrencyAreas对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/currencyCities/add": {
			"post": {
				"tags": ["currency-cities-controller"],
				"summary": "添加CurrencyCities对象",
				"description": "添加通市级表",
				"operationId": "addCurrencyCitiesUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "currencyCities",
					"description": "currencyCities",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CurrencyCities对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/currencyCities/delete/{id}": {
			"post": {
				"tags": ["currency-cities-controller"],
				"summary": "删除CurrencyCities对象",
				"description": "删除通市级表",
				"operationId": "deleteCurrencyCitiesUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/currencyCities/info/{id}": {
			"get": {
				"tags": ["currency-cities-controller"],
				"summary": "获取CurrencyCities对象详情",
				"description": "查看通市级表",
				"operationId": "getCurrencyCitiesUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/currencyCities/update": {
			"post": {
				"tags": ["currency-cities-controller"],
				"summary": "修改CurrencyCities对象",
				"description": "修改通市级表",
				"operationId": "updateCurrencyCitiesUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "currencyCities",
					"description": "currencyCities",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CurrencyCities对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/currencyProvinces/add": {
			"post": {
				"tags": ["currency-provinces-controller"],
				"summary": "添加CurrencyProvinces对象",
				"description": "添加通用省级表",
				"operationId": "addCurrencyProvincesUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "currencyProvinces",
					"description": "currencyProvinces",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CurrencyProvinces对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/currencyProvinces/delete/{id}": {
			"post": {
				"tags": ["currency-provinces-controller"],
				"summary": "删除CurrencyProvinces对象",
				"description": "删除通用省级表",
				"operationId": "deleteCurrencyProvincesUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/currencyProvinces/info/{id}": {
			"get": {
				"tags": ["currency-provinces-controller"],
				"summary": "获取CurrencyProvinces对象详情",
				"description": "查看通用省级表",
				"operationId": "getCurrencyProvincesUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/currencyProvinces/update": {
			"post": {
				"tags": ["currency-provinces-controller"],
				"summary": "修改CurrencyProvinces对象",
				"description": "修改通用省级表",
				"operationId": "updateCurrencyProvincesUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "currencyProvinces",
					"description": "currencyProvinces",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CurrencyProvinces对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/fabulous/add": {
			"post": {
				"tags": ["fabulous-controller"],
				"summary": "添加Fabulous对象",
				"description": "添加点赞表",
				"operationId": "addFabulousUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "fabulous",
					"description": "fabulous",
					"required": true,
					"schema": {
						"$ref": "#/definitions/Fabulous对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/fabulous/delete/{id}": {
			"post": {
				"tags": ["fabulous-controller"],
				"summary": "删除Fabulous对象",
				"description": "删除点赞表",
				"operationId": "deleteFabulousUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/fabulous/getPageList": {
			"post": {
				"tags": ["fabulous-controller"],
				"summary": "获取Fabulous分页列表",
				"description": "点赞表分页列表",
				"operationId": "getFabulousPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "fabulousQueryParam",
					"description": "fabulousQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/FabulousQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/Fabulous对象"
						}
					}
				}
			}
		},
		"/fabulous/info/{id}": {
			"get": {
				"tags": ["fabulous-controller"],
				"summary": "获取Fabulous对象详情",
				"description": "查看点赞表",
				"operationId": "getFabulousUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/fabulous/update": {
			"post": {
				"tags": ["fabulous-controller"],
				"summary": "修改Fabulous对象",
				"description": "修改点赞表",
				"operationId": "updateFabulousUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "fabulous",
					"description": "fabulous",
					"required": true,
					"schema": {
						"$ref": "#/definitions/Fabulous对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/activityRecruit/getPageList": {
			"post": {
				"tags": ["activity-recruit-app-controller"],
				"summary": "获取ActivityRecruit分页列表",
				"description": "活动招募表分页列表",
				"operationId": "getActivityRecruitAppPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activityRecruitQueryParam",
					"description": "activityRecruitQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivityRecruitQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivityRecruit对象"
						}
					}
				}
			}
		},
		"/new/era/app/activityRecruit/info/{id}": {
			"get": {
				"tags": ["activity-recruit-app-controller"],
				"summary": "获取ActivityRecruit对象详情",
				"description": "查看活动招募表",
				"operationId": "getActivityRecruitUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/activityRecruit/isSignUp/{id}/{userId}": {
			"get": {
				"tags": ["activity-recruit-app-controller"],
				"summary": "判断用户是否已报名",
				"description": "判断用户是否已报名",
				"operationId": "isSignUpUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "userId",
					"in": "path",
					"description": "userId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/activityRecruit/signOut/{id}/{userId}": {
			"get": {
				"tags": ["activity-recruit-app-controller"],
				"summary": "取消报名",
				"description": "取消报名",
				"operationId": "signOutUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "userId",
					"in": "path",
					"description": "userId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/activityRegistration/add": {
			"post": {
				"tags": ["activity-registration-app-controller"],
				"summary": "添加ActivityRegistration对象",
				"description": "添加活动志愿者报名表",
				"operationId": "addActivityRegistrationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activityRegistration",
					"description": "activityRegistration",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivityRegistration对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/activityRegistration/delete": {
			"post": {
				"tags": ["activity-registration-app-controller"],
				"summary": "删除ActivityRegistration对象",
				"description": "删除活动志愿者报名表",
				"operationId": "deleteActivityRegistrationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/activityRegistration/getPageList": {
			"post": {
				"tags": ["activity-registration-app-controller"],
				"summary": "获取ActivityRegistration分页列表",
				"description": "活动志愿者报名表分页列表",
				"operationId": "getActivityRegistrationPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activityRegistrationQueryParam",
					"description": "activityRegistrationQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivityRegistrationQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivityRegistration对象"
						}
					}
				}
			}
		},
		"/new/era/app/activitySignIn/getPageList": {
			"post": {
				"tags": ["activity-sign-in-app-controller"],
				"summary": "获取ActivitySignIn分页列表",
				"description": "活动签到表分页列表",
				"operationId": "getActivitySignInAppPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activitySignInQueryParam",
					"description": "activitySignInQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivitySignInQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivitySignIn对象"
						}
					}
				}
			}
		},
		"/new/era/app/activitySignIn/info/{id}": {
			"get": {
				"tags": ["activity-sign-in-app-controller"],
				"summary": "获取ActivitySignIn对象详情",
				"description": "查看活动签到表",
				"operationId": "getActivitySignInUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/activitySignInDetail/add": {
			"post": {
				"tags": ["activity-sign-in-detail-app-controller"],
				"summary": "添加ActivitySignInDetail对象",
				"description": "添加活动签到明细表",
				"operationId": "addActivitySignInDetailUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activitySignInDetail",
					"description": "activitySignInDetail",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivitySignInDetail对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/activitySignInDetail/getActivitySign/{activityCode}": {
			"get": {
				"tags": ["activity-sign-in-detail-app-controller"],
				"summary": "根据活动编码获取签到活动记录",
				"description": "根据活动编码获取签到活动记录",
				"operationId": "getActivitySignUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "activityCode",
					"in": "path",
					"description": "activityCode",
					"required": true,
					"type": "string"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/activitySignInDetail/getPageList": {
			"post": {
				"tags": ["activity-sign-in-detail-app-controller"],
				"summary": "获取ActivitySignInDetail分页列表",
				"description": "活动签到明细表分页列表",
				"operationId": "getActivitySignInDetailPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activitySignInDetailQueryParam",
					"description": "activitySignInDetailQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivitySignInDetailQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivitySignInDetail对象"
						}
					}
				}
			}
		},
		"/new/era/app/activitySignInDetail/isSignUp/{activitySignInId}/{userId}": {
			"get": {
				"tags": ["activity-sign-in-detail-app-controller"],
				"summary": "判断用户是否签到签退",
				"description": "判断用户是否签到签退",
				"operationId": "isSignUpUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "activitySignInId",
					"in": "path",
					"description": "activitySignInId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "userId",
					"in": "path",
					"description": "userId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationClass/add": {
			"post": {
				"tags": ["civilization-class-app-controller"],
				"summary": "添加CivilizationClass对象",
				"description": "添加文明课堂表",
				"operationId": "addCivilizationClassUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "civilizationClass",
					"description": "civilizationClass",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationClass对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationClass/delete/{id}": {
			"post": {
				"tags": ["civilization-class-app-controller"],
				"summary": "删除CivilizationClass对象",
				"description": "删除文明课堂表",
				"operationId": "deleteCivilizationClassUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationClass/info/{id}": {
			"get": {
				"tags": ["civilization-class-app-controller"],
				"summary": "获取CivilizationClass对象详情",
				"description": "查看文明课堂表",
				"operationId": "getCivilizationClassUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationClass/query-app-info/{id}": {
			"post": {
				"tags": ["civilization-class-app-controller"],
				"summary": "文明课堂关闭、启用",
				"description": "文明课堂关闭、启用",
				"operationId": "queryH5InfoUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationClass/query-app-list": {
			"get": {
				"tags": ["civilization-class-app-controller"],
				"summary": "列表展示",
				"description": "列表展示",
				"operationId": "queryH5ListUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "selectColumnId",
					"in": "query",
					"description": "选择栏目id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationClass/update": {
			"post": {
				"tags": ["civilization-class-app-controller"],
				"summary": "修改CivilizationClass对象",
				"description": "修改文明课堂表",
				"operationId": "updateCivilizationClassUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "civilizationClass",
					"description": "civilizationClass",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationClass对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationList/add": {
			"post": {
				"tags": ["civilization-list-app-controller"],
				"summary": "添加CivilizationList对象",
				"description": "添加文明榜单表",
				"operationId": "addCivilizationListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "civilizationList",
					"description": "civilizationList",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationList对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationList/add-app-referees": {
			"post": {
				"tags": ["civilization-list-app-controller"],
				"summary": "我要推荐",
				"description": "我要推荐",
				"operationId": "saveRefereesUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationListAddRefereesWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationList/delete": {
			"post": {
				"tags": ["civilization-list-app-controller"],
				"summary": "删除CivilizationList对象",
				"description": "删除文明榜单表",
				"operationId": "deleteCivilizationListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationListDeleteWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationList/query-app-list": {
			"get": {
				"tags": ["civilization-list-app-controller"],
				"summary": "列表获取",
				"description": "列表获取",
				"operationId": "queryH5ListUsingGET_1",
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationList/query-by-listId": {
			"post": {
				"tags": ["civilization-list-app-controller"],
				"summary": "根据榜单id获取榜单信息",
				"description": "根据榜单id获取榜单信息",
				"operationId": "queryByListIdUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationListQueryAppParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationList/query-h5-person-info/{id}": {
			"post": {
				"tags": ["civilization-list-app-controller"],
				"summary": "个人榜单详情",
				"description": "个人榜单详情",
				"operationId": "queryH5PersonInfoUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationList/query-organization-list": {
			"get": {
				"tags": ["civilization-list-app-controller"],
				"summary": "获取组织榜单列表",
				"description": "获取组织榜单列表",
				"operationId": "queryOrganizationListUsingGET",
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationList/query-organization-list-info": {
			"get": {
				"tags": ["civilization-list-app-controller"],
				"summary": "获取组织榜单信息",
				"description": "获取组织榜单信息",
				"operationId": "queryOrganizationListInfoUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "query",
					"description": "id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationMoment/add-app-moment": {
			"post": {
				"tags": ["civilization-moment-app-controller"],
				"summary": "文明瞬间app添加",
				"description": "文明瞬间app添加",
				"operationId": "addWebMomentUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationMomentUpdateWebAddParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationMoment/add-like-count": {
			"post": {
				"tags": ["civilization-moment-app-controller"],
				"summary": "增加点赞数",
				"description": "增加点赞数",
				"operationId": "addLikeCountUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ConsultingReleaseWebLikeParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationMoment/delete/{id}": {
			"post": {
				"tags": ["civilization-moment-app-controller"],
				"summary": "删除CivilizationMoment对象",
				"description": "删除文明瞬间表",
				"operationId": "deleteCivilizationMomentUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationMoment/info/{id}": {
			"get": {
				"tags": ["civilization-moment-app-controller"],
				"summary": "获取CivilizationMoment对象详情",
				"description": "查看文明瞬间表",
				"operationId": "getCivilizationMomentUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationMoment/query-app-by-userId": {
			"post": {
				"tags": ["civilization-moment-app-controller"],
				"summary": "查看我的文明瞬间",
				"description": "查看我的文明瞬间",
				"operationId": "queryByUserIdUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationMomentQueryWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationMoment/query-app-info": {
			"get": {
				"tags": ["civilization-moment-app-controller"],
				"summary": "文明瞬间app详情",
				"description": "文明瞬间app详情",
				"operationId": "queryH5InfoUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "userId",
					"in": "query",
					"description": "userId",
					"required": false,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "id",
					"in": "query",
					"description": "id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationMoment/query-app-list": {
			"post": {
				"tags": ["civilization-moment-app-controller"],
				"summary": "列表展示",
				"description": "列表展示",
				"operationId": "queryH5ListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationMomentQueryWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/civilizationMoment/reduction-like-count": {
			"post": {
				"tags": ["civilization-moment-app-controller"],
				"summary": "删减点赞数",
				"description": "删减点赞数",
				"operationId": "reductionLikeCountUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ConsultingReleaseWebLikeParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/consultingRelease/add": {
			"post": {
				"tags": ["consulting-release-app-controller"],
				"summary": "添加ConsultingRelease对象",
				"description": "添加资讯发布表",
				"operationId": "addConsultingReleaseUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ConsultingReleaseWebUpdateParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/consultingRelease/delete/{id}": {
			"post": {
				"tags": ["consulting-release-app-controller"],
				"summary": "删除ConsultingRelease对象",
				"description": "删除资讯发布表",
				"operationId": "deleteConsultingReleaseUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/consultingRelease/info/{id}": {
			"get": {
				"tags": ["consulting-release-app-controller"],
				"summary": "获取ConsultingRelease对象详情",
				"description": "查看资讯发布表",
				"operationId": "getConsultingReleaseUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/consultingRelease/query-app-info/{id}": {
			"post": {
				"tags": ["consulting-release-app-controller"],
				"summary": "详情",
				"description": "详情",
				"operationId": "queryH5InfoUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/consultingRelease/query-app-list": {
			"post": {
				"tags": ["consulting-release-app-controller"],
				"summary": "列表展示",
				"description": "列表展示",
				"operationId": "queryH5ListUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ConsultingReleaseWebQueryParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/consultingRelease/update": {
			"post": {
				"tags": ["consulting-release-app-controller"],
				"summary": "修改ConsultingRelease对象",
				"description": "修改资讯发布表",
				"operationId": "updateConsultingReleaseUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "consultingRelease",
					"description": "consultingRelease",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ConsultingRelease对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/home/home-information": {
			"get": {
				"tags": ["home-app-controller"],
				"summary": "app获取首页信息",
				"description": "app获取首页信息",
				"operationId": "homeUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/home/query-home-list": {
			"get": {
				"tags": ["home-app-controller"],
				"summary": "app获取首页列表",
				"description": "app获取首页列表",
				"operationId": "queryHomeListUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/likes/add": {
			"post": {
				"tags": ["likes-app-controller"],
				"summary": "添加Likes对象",
				"description": "添加点赞表",
				"operationId": "addLikesUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "likes",
					"description": "likes",
					"required": true,
					"schema": {
						"$ref": "#/definitions/Likes对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/listConfiguration/add": {
			"post": {
				"tags": ["list-configuration-app-controller"],
				"summary": "添加ListConfiguration对象",
				"description": "添加榜单配置",
				"operationId": "addListConfigurationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "listConfiguration",
					"description": "listConfiguration",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ListConfiguration对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/listConfiguration/delete/{id}": {
			"post": {
				"tags": ["list-configuration-app-controller"],
				"summary": "删除ListConfiguration对象",
				"description": "删除榜单配置",
				"operationId": "deleteListConfigurationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/listConfiguration/info/{id}": {
			"get": {
				"tags": ["list-configuration-app-controller"],
				"summary": "获取ListConfiguration对象详情",
				"description": "查看榜单配置",
				"operationId": "getListConfigurationUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/listConfiguration/query-all-list": {
			"get": {
				"tags": ["list-configuration-app-controller"],
				"summary": "获取榜单列表",
				"description": "获取榜单列表",
				"operationId": "queryAllListUsingGET",
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/listConfiguration/query-all-type/{listId}": {
			"get": {
				"tags": ["list-configuration-app-controller"],
				"summary": "根据榜单id获取榜单类型列表",
				"description": "根据榜单id获取榜单类型列表",
				"operationId": "queryAllTypeUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "listId",
					"in": "path",
					"description": "listId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/listConfiguration/update": {
			"post": {
				"tags": ["list-configuration-app-controller"],
				"summary": "修改ListConfiguration对象",
				"description": "修改榜单配置",
				"operationId": "updateListConfigurationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "listConfiguration",
					"description": "listConfiguration",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ListConfiguration对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/orderManage/add": {
			"post": {
				"tags": ["order-manage-app-controller"],
				"summary": "添加OrderManage对象",
				"description": "添加点单管理表",
				"operationId": "addOrderManageUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "orderManage",
					"description": "orderManage",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrderManage对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/orderManage/delete": {
			"post": {
				"tags": ["order-manage-app-controller"],
				"summary": "删除OrderManage对象",
				"description": "删除点单管理表",
				"operationId": "deleteOrderManageUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/orderManage/feedback": {
			"post": {
				"tags": ["order-manage-app-controller"],
				"summary": "评价反馈",
				"description": "评价反馈",
				"operationId": "updateOrderManageUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "orderFeedbackAppParam",
					"description": "orderFeedbackAppParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrderFeedbackAppParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/orderManage/getPageList": {
			"post": {
				"tags": ["order-manage-app-controller"],
				"summary": "获取OrderManage分页列表",
				"description": "点单管理表分页列表",
				"operationId": "getOrderManagePageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "orderManageQueryParam",
					"description": "orderManageQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrderManageQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/OrderManage对象"
						}
					}
				}
			}
		},
		"/new/era/app/orderManage/info/{id}": {
			"get": {
				"tags": ["order-manage-app-controller"],
				"summary": "获取OrderManage对象详情",
				"description": "查看点单管理表",
				"operationId": "getOrderManageUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/orderManage/isOrder/{serivceId}/{userId}": {
			"get": {
				"tags": ["order-manage-app-controller"],
				"summary": "判断用户是否点过单",
				"description": "判断用户是否点过单",
				"operationId": "isOrderUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "serivceId",
					"in": "path",
					"description": "serivceId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "userId",
					"in": "path",
					"description": "userId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/orderManage/update": {
			"post": {
				"tags": ["order-manage-app-controller"],
				"summary": "修改OrderManage对象",
				"description": "修改点单管理表",
				"operationId": "updateOrderManageUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "orderManage",
					"description": "orderManage",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrderManage对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/orderManage/update/status": {
			"post": {
				"tags": ["order-manage-app-controller"],
				"summary": "点单管理表状态",
				"description": "点单管理表修改状态",
				"operationId": "updateStatusUsingPOST_4",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "statusParam",
					"description": "statusParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/StatusParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/orderManageEvaluate/add": {
			"post": {
				"tags": ["order-manage-evaluate-app-controller"],
				"summary": "添加OrderManageEvaluate对象",
				"description": "添加",
				"operationId": "addOrderManageEvaluateUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "orderManageEvaluate",
					"description": "orderManageEvaluate",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrderManageEvaluate对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/orderManageEvaluate/delete/{id}": {
			"post": {
				"tags": ["order-manage-evaluate-app-controller"],
				"summary": "删除OrderManageEvaluate对象",
				"description": "删除",
				"operationId": "deleteOrderManageEvaluateUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/orderManageEvaluate/getPageList": {
			"post": {
				"tags": ["order-manage-evaluate-app-controller"],
				"summary": "获取OrderManageEvaluate分页列表",
				"description": "分页列表",
				"operationId": "getOrderManageEvaluatePageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "orderManageEvaluateQueryParam",
					"description": "orderManageEvaluateQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrderManageEvaluateQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/OrderManageEvaluate对象"
						}
					}
				}
			}
		},
		"/new/era/app/orderManageEvaluate/getPageListByOrderServiceId": {
			"post": {
				"tags": ["order-manage-evaluate-app-controller"],
				"summary": "根据点单服务获取OrderManageEvaluate分页列表",
				"description": "分页列表",
				"operationId": "getOrderManageEvaluatePageListByOrderServiceIdUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "orderManageEvaluateQueryParam",
					"description": "orderManageEvaluateQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrderManageEvaluateQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/OrderManageEvaluate对象"
						}
					}
				}
			}
		},
		"/new/era/app/orderManageEvaluate/info/{id}": {
			"get": {
				"tags": ["order-manage-evaluate-app-controller"],
				"summary": "获取OrderManageEvaluate对象详情",
				"description": "查看",
				"operationId": "getOrderManageEvaluateUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/orderManageEvaluate/update": {
			"post": {
				"tags": ["order-manage-evaluate-app-controller"],
				"summary": "修改OrderManageEvaluate对象",
				"description": "修改",
				"operationId": "updateOrderManageEvaluateUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "orderManageEvaluate",
					"description": "orderManageEvaluate",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrderManageEvaluate对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/practicePosition/delete": {
			"post": {
				"tags": ["practice-position-app-controller"],
				"summary": "删除PracticePosition对象",
				"description": "删除实践阵地",
				"operationId": "deletePracticePositionUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/practicePosition/query-all-positions": {
			"get": {
				"tags": ["practice-position-app-controller"],
				"summary": "app端查询阵地",
				"description": "app端查询阵地",
				"operationId": "queryAllPositionsUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "id",
					"in": "query",
					"description": "父级id 首次进入不用传,需要查子级列表是传入",
					"required": false,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "name",
					"in": "query",
					"description": "阵地名称",
					"required": false,
					"type": "string"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/practicePosition/query-info-by-id/{id}": {
			"get": {
				"tags": ["practice-position-app-controller"],
				"summary": "app端查询阵地详情",
				"description": "app端查询阵地详情",
				"operationId": "queryInfoByIdUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/practiceRanking/team": {
			"post": {
				"tags": ["practice-ranking-appcontroller"],
				"summary": "实践排行分页列表--志愿队伍",
				"description": "实践排行分页列表--志愿队伍",
				"operationId": "teamUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/PracticeRankingQueryParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/PracticeRankingVo"
						}
					}
				}
			}
		},
		"/new/era/app/practiceRanking/volunteer": {
			"post": {
				"tags": ["practice-ranking-appcontroller"],
				"summary": "实践排行分页列表--志愿者",
				"description": "实践排行分页列表--志愿者",
				"operationId": "volunteerUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/PracticeRankingQueryParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/PracticeRankingVo"
						}
					}
				}
			}
		},
		"/new/era/app/region/getList": {
			"post": {
				"tags": ["region-app-controller"],
				"summary": "区域表列表",
				"description": "区域表列表",
				"operationId": "getRegionListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "regionQueryParam",
					"description": "regionQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/RegionQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/Region对象"
						}
					}
				}
			}
		},
		"/new/era/app/region/getRegionByCode": {
			"get": {
				"tags": ["region-app-controller"],
				"summary": "app通过编码查询省市区",
				"description": "app通过编码查询省市区",
				"operationId": "getRegionByCodeUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "province",
					"in": "query",
					"description": "省",
					"required": false,
					"type": "string"
				}, {
					"name": "city",
					"in": "query",
					"description": "市",
					"required": false,
					"type": "string"
				}, {
					"name": "area",
					"in": "query",
					"description": "区",
					"required": false,
					"type": "string"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/region/getRegionList": {
			"get": {
				"tags": ["region-app-controller"],
				"summary": "app查询区域",
				"description": "app查询区域",
				"operationId": "getListUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "query",
					"description": "当前区域id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "type",
					"in": "query",
					"description": "区域类型 0：市 1：区",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "serviceType",
					"in": "query",
					"description": "服务类型 0:活动报名 1:活动服务 2:点单服务",
					"required": false,
					"type": "integer",
					"format": "int32"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/Region对象"
						}
					}
				}
			}
		},
		"/new/era/app/serviceManage/getPageList": {
			"post": {
				"tags": ["service-manage-app-controller"],
				"summary": "获取ServiceManage分页列表",
				"description": "服务管理表分页列表",
				"operationId": "getServiceManagePageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "serviceManageQueryParam",
					"description": "serviceManageQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ServiceManageQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ServiceManage对象"
						}
					}
				}
			}
		},
		"/new/era/app/serviceManage/info/{id}/{userId}": {
			"get": {
				"tags": ["service-manage-app-controller"],
				"summary": "获取ServiceManage对象详情",
				"description": "查看服务管理表",
				"operationId": "getServiceManageUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "userId",
					"in": "path",
					"description": "userId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/serviceManage/isOrder/{id}/{userId}": {
			"get": {
				"tags": ["service-manage-app-controller"],
				"summary": "判断用户是否已点单",
				"description": "判断用户是否已点单",
				"operationId": "isOrderUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "userId",
					"in": "path",
					"description": "userId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/typeConfiguration/add": {
			"post": {
				"tags": ["type-configuration-app-controller"],
				"summary": "添加TypeConfiguration对象",
				"description": "添加类型配置",
				"operationId": "addTypeConfigurationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "typeConfiguration",
					"description": "typeConfiguration",
					"required": true,
					"schema": {
						"$ref": "#/definitions/TypeConfiguration对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/typeConfiguration/delete/{id}": {
			"post": {
				"tags": ["type-configuration-app-controller"],
				"summary": "删除TypeConfiguration对象",
				"description": "删除类型配置",
				"operationId": "deleteTypeConfigurationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/typeConfiguration/info/{id}": {
			"get": {
				"tags": ["type-configuration-app-controller"],
				"summary": "获取TypeConfiguration对象详情",
				"description": "查看类型配置",
				"operationId": "getTypeConfigurationUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/typeConfiguration/query-by-type": {
			"get": {
				"tags": ["type-configuration-app-controller"],
				"summary": "根据类型获取栏目信息",
				"description": "根据类型获取栏目信息",
				"operationId": "queryByTypeUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "type",
					"in": "query",
					"description": "Integer",
					"required": false,
					"type": "integer",
					"format": "int32"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/typeConfiguration/update": {
			"post": {
				"tags": ["type-configuration-app-controller"],
				"summary": "修改TypeConfiguration对象",
				"description": "修改类型配置",
				"operationId": "updateTypeConfigurationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "typeConfiguration",
					"description": "typeConfiguration",
					"required": true,
					"schema": {
						"$ref": "#/definitions/TypeConfiguration对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/user/add": {
			"post": {
				"tags": ["user-app-controller"],
				"summary": "添加User对象",
				"description": "添加用户信息表",
				"operationId": "addUserUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "user",
					"description": "user",
					"required": true,
					"schema": {
						"$ref": "#/definitions/User对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/user/delete/{id}": {
			"post": {
				"tags": ["user-app-controller"],
				"summary": "删除User对象",
				"description": "删除用户信息表",
				"operationId": "deleteUserUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/user/get-register-information/{id}": {
			"get": {
				"tags": ["user-app-controller"],
				"summary": "app端获取用户注册信息",
				"description": "app端获取用户注册信息",
				"operationId": "getRegisterInformationUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/user/get-user-info": {
			"get": {
				"tags": ["user-app-controller"],
				"summary": "app端查询个人中心",
				"description": "app端查询个人中心",
				"operationId": "getUserInfoUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "query",
					"description": "id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "name",
					"in": "query",
					"description": "名称",
					"required": false,
					"type": "string"
				}, {
					"name": "url",
					"in": "query",
					"description": "用户头像",
					"required": false,
					"type": "string"
				}, {
					"name": "sex",
					"in": "query",
					"description": "性别",
					"required": false,
					"type": "string"
				}, {
					"name": "phone",
					"in": "query",
					"description": "手机号",
					"required": false,
					"type": "string"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/user/get-user-region/{userId}": {
			"get": {
				"tags": ["user-app-controller"],
				"summary": "app端查询个人地区",
				"description": "app端查询个人地区",
				"operationId": "getUserRegionUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "userId",
					"in": "path",
					"description": "userId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/user/getPageList": {
			"post": {
				"tags": ["user-app-controller"],
				"summary": "获取User分页列表",
				"description": "用户信息表分页列表",
				"operationId": "getUserPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "userQueryParam",
					"description": "userQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/UserQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/User对象"
						}
					}
				}
			}
		},
		"/new/era/app/user/info/{id}": {
			"get": {
				"tags": ["user-app-controller"],
				"summary": "获取User对象详情",
				"description": "查看用户信息表",
				"operationId": "getUserUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/user/order-feedback": {
			"post": {
				"tags": ["user-app-controller"],
				"summary": "app端反馈订单",
				"description": "app端反馈订单",
				"operationId": "orderFeedbackUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrderFeedbackAppParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/user/query-admin-service": {
			"get": {
				"tags": ["user-app-controller"],
				"summary": "app端查询管理员订单服务",
				"description": "app端查询管理员服务",
				"operationId": "queryAdminServiceUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "id",
					"in": "query",
					"description": "id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "type",
					"in": "query",
					"description": "类型",
					"required": false,
					"type": "integer",
					"format": "int32"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/user/query-user-activity": {
			"get": {
				"tags": ["user-app-controller"],
				"summary": "app端查询个人活动",
				"description": "app端查询个人活动",
				"operationId": "queryUserActivityUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "id",
					"in": "query",
					"description": "用户id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "type",
					"in": "query",
					"description": "类型 0 报名活动 , 1 签到活动",
					"required": false,
					"type": "integer",
					"format": "int32"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/user/query-user-civilization-moment": {
			"get": {
				"tags": ["user-app-controller"],
				"summary": "app端我的文明随手拍",
				"description": "app端我的文明随手拍",
				"operationId": "queryUserCivilizationMomentUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "id",
					"in": "query",
					"description": "id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/user/query-user-click-order": {
			"get": {
				"tags": ["user-app-controller"],
				"summary": "app端查询我的点单",
				"description": "app端查询我的点单",
				"operationId": "queryUserClickOrderUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "phone",
					"in": "query",
					"description": "手机号",
					"required": false,
					"type": "string"
				}, {
					"name": "type",
					"in": "query",
					"description": "类型",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "userId",
					"in": "query",
					"description": "用户id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/user/query-user-organization": {
			"get": {
				"tags": ["user-app-controller"],
				"summary": "app端查询用户组织",
				"description": "app端查询用户组织",
				"operationId": "queryUserOrganizationUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "id",
					"in": "query",
					"description": "id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/user/query-user-service": {
			"get": {
				"tags": ["user-app-controller"],
				"summary": "app端查询个人订单服务",
				"description": "app端查询个人服务",
				"operationId": "queryUserServiceUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "id",
					"in": "query",
					"description": "id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "type",
					"in": "query",
					"description": "类型",
					"required": false,
					"type": "integer",
					"format": "int32"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/user/query-user-wish": {
			"get": {
				"tags": ["user-app-controller"],
				"summary": "app端我的心愿",
				"description": "app端我的心愿",
				"operationId": "queryUserWishUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "id",
					"in": "query",
					"description": "用户id",
					"required": false,
					"type": "string"
				}, {
					"name": "status",
					"in": "query",
					"description": "状态, 0：未处理，1：已处理，2：已驳回,3 全部",
					"required": false,
					"type": "integer",
					"format": "int32"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/user/update-register-information": {
			"post": {
				"tags": ["user-app-controller"],
				"summary": "app端修改用户注册信息",
				"description": "app端修改用户注册信息",
				"operationId": "updateRegisterInformationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/UserRegisterInformationAppVo"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/userRoleInfo/add": {
			"post": {
				"tags": ["user-role-info-app-controller"],
				"summary": "添加UserRoleInfo对象",
				"description": "添加APP用户角色表",
				"operationId": "addUserRoleInfoUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "userRoleInfo",
					"description": "userRoleInfo",
					"required": true,
					"schema": {
						"$ref": "#/definitions/UserRoleInfo对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/userRoleInfo/delete/{id}": {
			"post": {
				"tags": ["user-role-info-app-controller"],
				"summary": "删除UserRoleInfo对象",
				"description": "删除APP用户角色表",
				"operationId": "deleteUserRoleInfoUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/userRoleInfo/getPageList": {
			"post": {
				"tags": ["user-role-info-app-controller"],
				"summary": "获取UserRoleInfo分页列表",
				"description": "APP用户角色表分页列表",
				"operationId": "getUserRoleInfoPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "userRoleInfoQueryParam",
					"description": "userRoleInfoQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/UserRoleInfoQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/UserRoleInfo对象"
						}
					}
				}
			}
		},
		"/new/era/app/userRoleInfo/info/{id}": {
			"get": {
				"tags": ["user-role-info-app-controller"],
				"summary": "获取UserRoleInfo对象详情",
				"description": "查看APP用户角色表",
				"operationId": "getUserRoleInfoUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/userRoleInfo/query-user-practice-position": {
			"get": {
				"tags": ["user-role-info-app-controller"],
				"summary": "获取用户所在阵地",
				"description": "获取用户所在阵地",
				"operationId": "queryUserPracticePositionUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "phone",
					"in": "query",
					"description": "phone",
					"required": false,
					"type": "string"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/userRoleInfo/query-user-role-info": {
			"get": {
				"tags": ["user-role-info-app-controller"],
				"summary": "获取用户角色",
				"description": "获取用户角色",
				"operationId": "queryUserRoleInfoUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "query",
					"description": "id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "phone",
					"in": "query",
					"description": "phone",
					"required": false,
					"type": "string"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/userRoleInfo/update": {
			"post": {
				"tags": ["user-role-info-app-controller"],
				"summary": "修改UserRoleInfo对象",
				"description": "修改APP用户角色表",
				"operationId": "updateUserRoleInfoUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "userRoleInfo",
					"description": "userRoleInfo",
					"required": true,
					"schema": {
						"$ref": "#/definitions/UserRoleInfo对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/volunteer/add": {
			"post": {
				"tags": ["volunteer-app-controller"],
				"summary": "添加Volunteer对象",
				"description": "添加志愿者管理表",
				"operationId": "addVolunteerUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteer",
					"description": "volunteer",
					"required": true,
					"schema": {
						"$ref": "#/definitions/Volunteer对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/volunteer/info/{userId}": {
			"get": {
				"tags": ["volunteer-app-controller"],
				"summary": "获取Volunteer对象详情",
				"description": "查看志愿者管理表",
				"operationId": "getVolunteerUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "userId",
					"in": "path",
					"description": "userId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/volunteerTeamIn/add": {
			"post": {
				"tags": ["volunteer-team-in-app-controller"],
				"summary": "添加VolunteerTeamIn对象",
				"description": "添加志愿队伍-队伍入驻表",
				"operationId": "addVolunteerTeamInUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteerTeamIn",
					"description": "volunteerTeamIn",
					"required": true,
					"schema": {
						"$ref": "#/definitions/VolunteerTeamIn对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/volunteerTeamIn/add-by-param": {
			"post": {
				"tags": ["volunteer-team-in-app-controller"],
				"summary": "app端添加队伍入驻",
				"description": "app端添加队伍入驻",
				"operationId": "addByParamUsingPOST_3",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/AddInAppParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/volunteerTeamIn/delete/{id}": {
			"post": {
				"tags": ["volunteer-team-in-app-controller"],
				"summary": "删除VolunteerTeamIn对象",
				"description": "删除志愿队伍-队伍入驻表",
				"operationId": "deleteVolunteerTeamInUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/volunteerTeamIn/info/{id}": {
			"get": {
				"tags": ["volunteer-team-in-app-controller"],
				"summary": "获取VolunteerTeamIn对象详情",
				"description": "查看志愿队伍-队伍入驻表",
				"operationId": "getVolunteerTeamInUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/volunteerTeamIn/update": {
			"post": {
				"tags": ["volunteer-team-in-app-controller"],
				"summary": "修改VolunteerTeamIn对象",
				"description": "修改志愿队伍-队伍入驻表",
				"operationId": "updateVolunteerTeamInUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteerTeamIn",
					"description": "volunteerTeamIn",
					"required": true,
					"schema": {
						"$ref": "#/definitions/VolunteerTeamIn对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/volunteerTeamManagement/delete": {
			"post": {
				"tags": ["volunteer-team-management-app-controller"],
				"summary": "删除VolunteerTeamManagement对象",
				"description": "删除志愿队伍-队伍管理表",
				"operationId": "deleteVolunteerTeamManagementUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/volunteerTeamManagement/join-operation": {
			"post": {
				"tags": ["volunteer-team-management-app-controller"],
				"summary": "app端加入队伍操作",
				"description": "app端加入队伍操作",
				"operationId": "joinOperationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/JoinOrganizationAppParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/volunteerTeamManagement/query-info-by-id": {
			"get": {
				"tags": ["volunteer-team-management-app-controller"],
				"summary": "app端查询队伍详情",
				"description": "app端查询队伍详情",
				"operationId": "queryInfoByIdUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "query",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "userId",
					"in": "query",
					"description": "userId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/volunteerTeamManagement/query-page-by-param": {
			"get": {
				"tags": ["volunteer-team-management-app-controller"],
				"summary": "app端分页查询队伍",
				"description": "app端分页查询队伍",
				"operationId": "queryPageByParamUsingGET_5",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "id",
					"in": "query",
					"description": "队伍id 首次进入不需要队伍id，查询子级队伍时需要",
					"required": false,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "name",
					"in": "query",
					"description": "队伍名称",
					"required": false,
					"type": "string"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/wishManage/add": {
			"post": {
				"tags": ["wish-manage-app-controller"],
				"summary": "添加WishManage对象",
				"description": "添加心愿列表",
				"operationId": "addWishManageUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "wishManage",
					"description": "wishManage",
					"required": true,
					"schema": {
						"$ref": "#/definitions/WishManage对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/wishManage/delete": {
			"post": {
				"tags": ["wish-manage-app-controller"],
				"summary": "删除WishManage对象",
				"description": "删除心愿列表",
				"operationId": "deleteWishManageUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/wishManage/getPageList": {
			"post": {
				"tags": ["wish-manage-app-controller"],
				"summary": "获取WishManage分页列表",
				"description": "心愿列表分页列表",
				"operationId": "getWishManagePageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "wishManageQueryParam",
					"description": "wishManageQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/WishManageQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WishManage对象"
						}
					}
				}
			}
		},
		"/new/era/app/wishManage/info/{id}": {
			"get": {
				"tags": ["wish-manage-app-controller"],
				"summary": "获取WishManage对象详情",
				"description": "查看心愿列表",
				"operationId": "getWishManageUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/app/wishManage/update": {
			"post": {
				"tags": ["wish-manage-app-controller"],
				"summary": "修改WishManage对象",
				"description": "修改心愿列表",
				"operationId": "updateWishManageUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "wishManage",
					"description": "wishManage",
					"required": true,
					"schema": {
						"$ref": "#/definitions/WishManage对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/file/upload": {
			"post": {
				"tags": ["file-upload-controller"],
				"summary": "上传文件",
				"description": "上传文件",
				"operationId": "uploadUsingPOST",
				"consumes": ["multipart/form-data"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "file",
					"in": "formData",
					"description": "file",
					"required": true,
					"type": "file"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activityRecruit/add": {
			"post": {
				"tags": ["activity-recruit-web-controller"],
				"summary": "添加ActivityRecruit对象",
				"description": "添加活动招募表",
				"operationId": "addActivityRecruitUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activityRecruit",
					"description": "activityRecruit",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivityRecruit对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activityRecruit/delete": {
			"post": {
				"tags": ["activity-recruit-web-controller"],
				"summary": "删除ActivityRecruit对象",
				"description": "删除活动招募表",
				"operationId": "deleteActivityRecruitUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activityRecruit/getPageList": {
			"post": {
				"tags": ["activity-recruit-web-controller"],
				"summary": "获取ActivityRecruit分页列表",
				"description": "活动招募表分页列表",
				"operationId": "getActivityRecruitPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activityRecruitQueryParam",
					"description": "activityRecruitQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivityRecruitQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivityRecruit对象"
						}
					}
				}
			}
		},
		"/new/era/web/activityRecruit/info/{id}": {
			"get": {
				"tags": ["activity-recruit-web-controller"],
				"summary": "获取ActivityRecruit对象详情",
				"description": "查看活动招募表",
				"operationId": "getActivityRecruitUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activityRecruit/update": {
			"post": {
				"tags": ["activity-recruit-web-controller"],
				"summary": "修改ActivityRecruit对象",
				"description": "修改活动招募表",
				"operationId": "updateActivityRecruitUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activityRecruit",
					"description": "activityRecruit",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivityRecruit对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activityRecruit/update/status": {
			"post": {
				"tags": ["activity-recruit-web-controller"],
				"summary": "活动招募表状态",
				"description": "活动招募表修改状态",
				"operationId": "updateStatusUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "statusParam",
					"description": "statusParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/StatusParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activityRegistration/add": {
			"post": {
				"tags": ["activity-registration-web-controller"],
				"summary": "添加ActivityRegistration对象",
				"description": "添加活动志愿者报名表",
				"operationId": "addActivityRegistrationUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activityRegistration",
					"description": "activityRegistration",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivityRegistration对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activityRegistration/delete": {
			"post": {
				"tags": ["activity-registration-web-controller"],
				"summary": "删除ActivityRegistration对象",
				"description": "删除活动志愿者报名表",
				"operationId": "deleteActivityRegistrationUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activityRegistration/export": {
			"get": {
				"tags": ["activity-registration-web-controller"],
				"summary": "web端导出报名信息",
				"description": "web端导出报名信息",
				"operationId": "exportTeamInUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "ids",
					"in": "query",
					"description": "关联招募活动id",
					"required": false,
					"type": "array",
					"items": {
						"type": "integer",
						"format": "int64"
					},
					"collectionFormat": "multi"
				}],
				"responses": {
					"200": {
						"description": "OK"
					}
				}
			}
		},
		"/new/era/web/activityRegistration/getPageList": {
			"post": {
				"tags": ["activity-registration-web-controller"],
				"summary": "获取ActivityRegistration分页列表",
				"description": "活动志愿者报名表分页列表",
				"operationId": "getActivityRegistrationPageListUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activityRegistrationQueryParam",
					"description": "activityRegistrationQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivityRegistrationQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivityRegistration对象"
						}
					}
				}
			}
		},
		"/new/era/web/activityRegistration/info/{id}": {
			"get": {
				"tags": ["activity-registration-web-controller"],
				"summary": "获取ActivityRegistration对象详情",
				"description": "查看活动志愿者报名表",
				"operationId": "getActivityRegistrationUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activityRegistration/update": {
			"post": {
				"tags": ["activity-registration-web-controller"],
				"summary": "修改ActivityRegistration对象",
				"description": "修改活动志愿者报名表",
				"operationId": "updateActivityRegistrationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activityRegistration",
					"description": "activityRegistration",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivityRegistration对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activityRegistration/update/status": {
			"post": {
				"tags": ["activity-registration-web-controller"],
				"summary": "活动志愿者报名表状态",
				"description": "活动志愿者报名表修改状态",
				"operationId": "updateStatusUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "statusParam",
					"description": "statusParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/StatusParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activitySignIn/add": {
			"post": {
				"tags": ["activity-sign-in-web-controller"],
				"summary": "添加ActivitySignIn对象",
				"description": "添加活动签到表",
				"operationId": "addActivitySignInUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activitySignIn",
					"description": "activitySignIn",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivitySignIn对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activitySignIn/create/code/{id}": {
			"post": {
				"tags": ["activity-sign-in-web-controller"],
				"summary": "生成活动码",
				"description": "生成活动码",
				"operationId": "createCodeUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activitySignIn/delete": {
			"post": {
				"tags": ["activity-sign-in-web-controller"],
				"summary": "删除ActivitySignIn对象",
				"description": "删除活动签到表",
				"operationId": "deleteActivitySignInUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activitySignIn/getPageList": {
			"post": {
				"tags": ["activity-sign-in-web-controller"],
				"summary": "获取ActivitySignIn分页列表",
				"description": "活动签到表分页列表",
				"operationId": "getActivitySignInPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activitySignInQueryParam",
					"description": "activitySignInQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivitySignInQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivitySignIn对象"
						}
					}
				}
			}
		},
		"/new/era/web/activitySignIn/info/{id}": {
			"get": {
				"tags": ["activity-sign-in-web-controller"],
				"summary": "获取ActivitySignIn对象详情",
				"description": "查看活动签到表",
				"operationId": "getActivitySignInUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activitySignIn/update": {
			"post": {
				"tags": ["activity-sign-in-web-controller"],
				"summary": "修改ActivitySignIn对象",
				"description": "修改活动签到表",
				"operationId": "updateActivitySignInUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activitySignIn",
					"description": "activitySignIn",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivitySignIn对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activitySignIn/update/status": {
			"post": {
				"tags": ["activity-sign-in-web-controller"],
				"summary": "活动签到表状态",
				"description": "活动签到表修改状态",
				"operationId": "updateStatusUsingPOST_2",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "statusParam",
					"description": "statusParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/StatusParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activitySignInDetail/add": {
			"post": {
				"tags": ["activity-sign-in-detail-web-controller"],
				"summary": "添加ActivitySignInDetail对象",
				"description": "添加活动签到明细表",
				"operationId": "addActivitySignInDetailUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activitySignInDetail",
					"description": "activitySignInDetail",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivitySignInDetail对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activitySignInDetail/delete": {
			"post": {
				"tags": ["activity-sign-in-detail-web-controller"],
				"summary": "删除ActivitySignInDetail对象",
				"description": "删除活动签到明细表",
				"operationId": "deleteActivitySignInDetailUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activitySignInDetail/getPageList": {
			"post": {
				"tags": ["activity-sign-in-detail-web-controller"],
				"summary": "获取ActivitySignInDetail分页列表",
				"description": "活动签到明细表分页列表",
				"operationId": "getActivitySignInDetailPageListUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activitySignInDetailQueryParam",
					"description": "activitySignInDetailQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivitySignInDetailQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivitySignInDetail对象"
						}
					}
				}
			}
		},
		"/new/era/web/activitySignInDetail/getTodayList/detail/{activitySignInId}/{userId}": {
			"post": {
				"tags": ["activity-sign-in-detail-web-controller"],
				"summary": "获取用户当天签到记录",
				"description": "获取用户当天签到记录",
				"operationId": "getActivitySignInDetailTodayDetailPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "activitySignInId",
					"in": "path",
					"description": "activitySignInId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "userId",
					"in": "path",
					"description": "userId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivitySignInDetail对象"
						}
					}
				}
			}
		},
		"/new/era/web/activitySignInDetail/getTodayList/{activitySignInId}": {
			"post": {
				"tags": ["activity-sign-in-detail-web-controller"],
				"summary": "获取当天签到列表",
				"description": "获取当天签到列表",
				"operationId": "getActivitySignInDetailTodayPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activitySignInDetailQueryParam",
					"description": "activitySignInDetailQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivitySignInDetailQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivitySignInDetail对象"
						}
					}
				}
			}
		},
		"/new/era/web/activitySignInDetail/info/{id}": {
			"get": {
				"tags": ["activity-sign-in-detail-web-controller"],
				"summary": "获取ActivitySignInDetail对象详情",
				"description": "查看活动签到明细表",
				"operationId": "getActivitySignInDetailUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/activitySignInDetail/update": {
			"post": {
				"tags": ["activity-sign-in-detail-web-controller"],
				"summary": "修改ActivitySignInDetail对象",
				"description": "修改活动签到明细表",
				"operationId": "updateActivitySignInDetailUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activitySignInDetail",
					"description": "activitySignInDetail",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ActivitySignInDetail对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/adminPracticePosition/add-by-param": {
			"post": {
				"tags": ["admin-practice-position-web-controller"],
				"summary": "web端添加阵地管理员",
				"description": "web端添加阵地管理员",
				"operationId": "addByParamUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/AddAndUpdateByWebAdminPracticeParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/adminPracticePosition/delete": {
			"post": {
				"tags": ["admin-practice-position-web-controller"],
				"summary": "删除AdminPracticePosition对象",
				"description": "删除管理员-实践阵地",
				"operationId": "deleteAdminPracticePositionUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/adminPracticePosition/get-info-by-id/{id}": {
			"get": {
				"tags": ["admin-practice-position-web-controller"],
				"summary": "web端查看阵地管理员详情",
				"description": "web端查看阵地管理员详情",
				"operationId": "getInfoByIdUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/adminPracticePosition/query-page-by-param": {
			"get": {
				"tags": ["admin-practice-position-web-controller"],
				"summary": "web端多条件分页查询",
				"description": "web多条件分页查询",
				"operationId": "queryPageByParamUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "idCard",
					"in": "query",
					"description": "身份证号",
					"required": false,
					"type": "string"
				}, {
					"name": "name",
					"in": "query",
					"description": "姓名",
					"required": false,
					"type": "string"
				}, {
					"name": "sort",
					"in": "query",
					"description": "排序字段",
					"required": false,
					"type": "string"
				}, {
					"name": "orderBy",
					"in": "query",
					"description": "排序方式  asc , desc",
					"required": false,
					"type": "string"
				}, {
					"name": "id",
					"in": "query",
					"description": "id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/adminPracticePosition/update-by-param": {
			"post": {
				"tags": ["admin-practice-position-web-controller"],
				"summary": "web端修改阵地管理员",
				"description": "web端修改阵地管理员",
				"operationId": "updateByParamUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/AddAndUpdateByWebAdminPracticeParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/adminPracticePosition/update-status-by-param": {
			"post": {
				"tags": ["admin-practice-position-web-controller"],
				"summary": "web端修改阵地管理员状态",
				"description": "web端修改阵地管理员状态",
				"operationId": "updateStatusByParamUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/UpdateStatusWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/adminVoluntaryManagement/add-by-param": {
			"post": {
				"tags": ["admin-voluntary-management-web-controller"],
				"summary": "web端添加组织管理员",
				"description": "web端添加组织管理员",
				"operationId": "addByParamUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/AddAndUpdateWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/adminVoluntaryManagement/delete": {
			"post": {
				"tags": ["admin-voluntary-management-web-controller"],
				"summary": "删除AdminVoluntaryManagement对象",
				"description": "删除管理员-志愿管理",
				"operationId": "deleteAdminVoluntaryManagementUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/adminVoluntaryManagement/get-info-by-id/{id}": {
			"get": {
				"tags": ["admin-voluntary-management-web-controller"],
				"summary": "web端查询管理员信息",
				"description": "web端查询管理员信息",
				"operationId": "getInfoByIdUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/adminVoluntaryManagement/get-permission-by-id/{id}": {
			"get": {
				"tags": ["admin-voluntary-management-web-controller"],
				"summary": "web端查询管理员权限",
				"description": "web端查询用户权限",
				"operationId": "getPermissionByIdUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/adminVoluntaryManagement/query-page-by-param": {
			"get": {
				"tags": ["admin-voluntary-management-web-controller"],
				"summary": "web端多条件分页查询",
				"description": "web端多条件分页查询",
				"operationId": "queryPageByParamUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "name",
					"in": "query",
					"description": "姓名",
					"required": false,
					"type": "string"
				}, {
					"name": "idCard",
					"in": "query",
					"description": "身份证号码",
					"required": false,
					"type": "string"
				}, {
					"name": "status",
					"in": "query",
					"description": "状态",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "phone",
					"in": "query",
					"description": "手机号",
					"required": false,
					"type": "string"
				}, {
					"name": "email",
					"in": "query",
					"description": "邮箱",
					"required": false,
					"type": "string"
				}, {
					"name": "range",
					"in": "query",
					"description": "范围 0 本级 , 1 所有",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "id",
					"in": "query",
					"description": "组织id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "sort",
					"in": "query",
					"description": "排序字段",
					"required": false,
					"type": "string"
				}, {
					"name": "orderBy",
					"in": "query",
					"description": "排序方式  asc , desc",
					"required": false,
					"type": "string"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/adminVoluntaryManagement/selection-delete": {
			"post": {
				"tags": ["admin-voluntary-management-web-controller"],
				"summary": "web端多选删除",
				"description": "web端多选删除",
				"operationId": "selectionDeleteUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "ids",
					"in": "query",
					"description": "ids",
					"required": true,
					"type": "array",
					"items": {
						"type": "integer",
						"format": "int64"
					},
					"collectionFormat": "multi"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/adminVoluntaryManagement/update-by-param": {
			"post": {
				"tags": ["admin-voluntary-management-web-controller"],
				"summary": "web端修改管理员信息",
				"description": "web端修改管理员信息",
				"operationId": "updateByParamUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/AddAndUpdateWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/adminVoluntaryManagement/update-permission-by-param": {
			"post": {
				"tags": ["admin-voluntary-management-web-controller"],
				"summary": "web端修改管理员权限",
				"description": "web端修改管理员权限",
				"operationId": "updatePermissionByParamUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/UpdatePermissionWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationClass/add": {
			"post": {
				"tags": ["civilization-class-web-controller"],
				"summary": "添加CivilizationClass对象",
				"description": "添加文明课堂表",
				"operationId": "addCivilizationClassUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "civilizationClass",
					"description": "civilizationClass",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationClass对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationClass/delete/{id}": {
			"post": {
				"tags": ["civilization-class-web-controller"],
				"summary": "删除CivilizationClass对象",
				"description": "删除文明课堂表",
				"operationId": "deleteCivilizationClassUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationClass/info/{id}": {
			"get": {
				"tags": ["civilization-class-web-controller"],
				"summary": "获取CivilizationClass对象详情",
				"description": "查看文明课堂表",
				"operationId": "getCivilizationClassUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationClass/query-web-by-param": {
			"post": {
				"tags": ["civilization-class-web-controller"],
				"summary": "条件查询+分页展示",
				"description": "条件查询+分页展示",
				"operationId": "queryWebByParamUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationWebQueryParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationClass/update": {
			"post": {
				"tags": ["civilization-class-web-controller"],
				"summary": "修改CivilizationClass对象",
				"description": "修改文明课堂表",
				"operationId": "updateCivilizationClassUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "civilizationClass",
					"description": "civilizationClass",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationClass对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationClass/update-web-isEnable": {
			"post": {
				"tags": ["civilization-class-web-controller"],
				"summary": "文明课堂关闭、启用",
				"description": "文明课堂关闭、启用",
				"operationId": "updateWebIsEnableUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationClassWebUpdateParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationList/add": {
			"post": {
				"tags": ["civilization-list-web-controller"],
				"summary": "添加CivilizationList对象",
				"description": "添加文明榜单表",
				"operationId": "addCivilizationListUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "civilizationList",
					"description": "civilizationList",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationList对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationList/delete": {
			"post": {
				"tags": ["civilization-list-web-controller"],
				"summary": "删除CivilizationList对象",
				"description": "删除文明榜单表",
				"operationId": "deleteCivilizationListUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationListDeleteWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationList/query-web-by-param": {
			"post": {
				"tags": ["civilization-list-web-controller"],
				"summary": "条件查询+分页展示",
				"description": "条件查询+分页展示",
				"operationId": "queryWebByParamUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationListQueryWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationList/update-web-status": {
			"post": {
				"tags": ["civilization-list-web-controller"],
				"summary": "状态修改",
				"description": "状态修改",
				"operationId": "updateWebStatusUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationListUpdateWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationList/web-add": {
			"post": {
				"tags": ["civilization-list-web-controller"],
				"summary": "web添加文明榜单表",
				"description": "web添加文明榜单表",
				"operationId": "addWebCivilizationListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "civilizationListAddWebParam",
					"description": "civilizationListAddWebParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationListAddWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationList/web-info/{id}": {
			"post": {
				"tags": ["civilization-list-web-controller"],
				"summary": "web获取文明榜单表",
				"description": "web获取文明榜单表",
				"operationId": "getCivilizationListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationList/web-update": {
			"post": {
				"tags": ["civilization-list-web-controller"],
				"summary": "web修改文明榜单表",
				"description": "web修改文明榜单表",
				"operationId": "updateWebCivilizationListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "civilizationListUrlWebVo",
					"description": "civilizationListUrlWebVo",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationListUrlWebVo"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationMoment/add-web-moment": {
			"post": {
				"tags": ["civilization-moment-web-controller"],
				"summary": "文明瞬间web添加",
				"description": "文明瞬间web添加",
				"operationId": "addWebMomentUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationMomentUpdateWebAddParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationMoment/delete/{id}": {
			"post": {
				"tags": ["civilization-moment-web-controller"],
				"summary": "删除CivilizationMoment对象",
				"description": "删除文明瞬间表",
				"operationId": "deleteCivilizationMomentUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationMoment/info/{id}": {
			"get": {
				"tags": ["civilization-moment-web-controller"],
				"summary": "获取CivilizationMoment对象详情",
				"description": "查看文明瞬间表",
				"operationId": "getCivilizationMomentUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationMoment/query-web-by-param": {
			"post": {
				"tags": ["civilization-moment-web-controller"],
				"summary": "文明瞬间分页展示",
				"description": "文明瞬间分页展示",
				"operationId": "queryWebByParamUsingPOST_2",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "queryParam",
					"description": "queryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationMomentQueryWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationMoment/update-web-isEnable": {
			"post": {
				"tags": ["civilization-moment-web-controller"],
				"summary": "文明瞬间修改状态",
				"description": "文明瞬间修改状态",
				"operationId": "updateWebIsEnableUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "updateWebStatusParam",
					"description": "updateWebStatusParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationMomentUpdateWebStatusParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/civilizationMoment/update-web-moment": {
			"post": {
				"tags": ["civilization-moment-web-controller"],
				"summary": "文明瞬间web修改",
				"description": "文明瞬间web修改",
				"operationId": "updateWebMomentUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CivilizationMomentUpdateWebAddParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/clues/add": {
			"post": {
				"tags": ["clues-web-controller"],
				"summary": "添加Clues对象",
				"description": "添加收到线索表",
				"operationId": "addCluesUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "clues",
					"description": "clues",
					"required": true,
					"schema": {
						"$ref": "#/definitions/Clues对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/clues/delete": {
			"post": {
				"tags": ["clues-web-controller"],
				"summary": "删除Clues对象",
				"description": "删除收到线索表",
				"operationId": "deleteCluesUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CluesWebDeleteParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/clues/getPageList": {
			"post": {
				"tags": ["clues-web-controller"],
				"summary": "获取Clues分页列表",
				"description": "收到线索表分页列表",
				"operationId": "getCluesPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "cluesQueryParam",
					"description": "cluesQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CluesQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/Clues对象"
						}
					}
				}
			}
		},
		"/new/era/web/clues/info/{id}": {
			"get": {
				"tags": ["clues-web-controller"],
				"summary": "获取Clues对象详情",
				"description": "查看收到线索表",
				"operationId": "getCluesUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/clues/query-web-by-param": {
			"post": {
				"tags": ["clues-web-controller"],
				"summary": "分页展示",
				"description": "分页展示",
				"operationId": "queryWebByParamUsingPOST_3",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CluesWebQueryParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/clues/update": {
			"post": {
				"tags": ["clues-web-controller"],
				"summary": "修改Clues对象",
				"description": "修改收到线索表",
				"operationId": "updateCluesUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "clues",
					"description": "clues",
					"required": true,
					"schema": {
						"$ref": "#/definitions/Clues对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/consultingRelease/add": {
			"post": {
				"tags": ["consulting-release-web-controller"],
				"summary": "添加ConsultingRelease对象",
				"description": "添加资讯发布表",
				"operationId": "addConsultingReleaseUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ConsultingReleaseWebUpdateParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/consultingRelease/delete/{id}": {
			"post": {
				"tags": ["consulting-release-web-controller"],
				"summary": "删除ConsultingRelease对象",
				"description": "删除资讯发布表",
				"operationId": "deleteConsultingReleaseUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/consultingRelease/info/{id}": {
			"get": {
				"tags": ["consulting-release-web-controller"],
				"summary": "获取ConsultingRelease对象详情",
				"description": "查看资讯发布表",
				"operationId": "getConsultingReleaseUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/consultingRelease/query-web-by-param": {
			"post": {
				"tags": ["consulting-release-web-controller"],
				"summary": "条件查询+分页展示",
				"description": "条件查询+分页展示",
				"operationId": "queryWebByParamUsingPOST_4",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ConsultingReleaseWebQueryParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/consultingRelease/update": {
			"post": {
				"tags": ["consulting-release-web-controller"],
				"summary": "修改ConsultingRelease对象",
				"description": "修改资讯发布表",
				"operationId": "updateConsultingReleaseUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "consultingRelease",
					"description": "consultingRelease",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ConsultingRelease对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/consultingRelease/update-web-isEnable": {
			"post": {
				"tags": ["consulting-release-web-controller"],
				"summary": "资讯发布关闭、启用",
				"description": "资讯发布关闭、启用",
				"operationId": "updateWebIsEnableUsingPOST_2",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ConsultingReleaseWebUpdateParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/creditHoursData/add": {
			"post": {
				"tags": ["credit-hours-data-web-controller"],
				"summary": "添加CreditHoursData对象",
				"description": "添加信用时数数据表",
				"operationId": "addCreditHoursDataUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "creditHoursData",
					"description": "creditHoursData",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CreditHoursData对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/creditHoursData/delete": {
			"post": {
				"tags": ["credit-hours-data-web-controller"],
				"summary": "删除CreditHoursData对象",
				"description": "删除信用时数数据表",
				"operationId": "deleteCreditHoursDataUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/creditHoursData/getPageList": {
			"post": {
				"tags": ["credit-hours-data-web-controller"],
				"summary": "获取CreditHoursData分页列表",
				"description": "信用时数数据表分页列表",
				"operationId": "getCreditHoursDataPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "creditHoursDataQueryParam",
					"description": "creditHoursDataQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CreditHoursDataQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/CreditHoursData对象"
						}
					}
				}
			}
		},
		"/new/era/web/creditHoursData/info/{id}": {
			"get": {
				"tags": ["credit-hours-data-web-controller"],
				"summary": "获取CreditHoursData对象详情",
				"description": "查看信用时数数据表",
				"operationId": "getCreditHoursDataUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/creditHoursData/update": {
			"post": {
				"tags": ["credit-hours-data-web-controller"],
				"summary": "修改CreditHoursData对象",
				"description": "修改信用时数数据表",
				"operationId": "updateCreditHoursDataUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "creditHoursData",
					"description": "creditHoursData",
					"required": true,
					"schema": {
						"$ref": "#/definitions/CreditHoursData对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/creditHoursData/update/status": {
			"post": {
				"tags": ["credit-hours-data-web-controller"],
				"summary": "信用时数数据表状态",
				"description": "信用时数数据表修改状态",
				"operationId": "updateStatusUsingPOST_3",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "statusParam",
					"description": "statusParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/StatusParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/dataCenter/activity/category": {
			"post": {
				"tags": ["data-center-web-controller"],
				"summary": "数据大屏--签到活动分类占比",
				"description": "数据大屏--签到活动分类占比",
				"operationId": "activityCategoryUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivityRecruit对象"
						}
					}
				}
			}
		},
		"/new/era/web/dataCenter/activity/data": {
			"post": {
				"tags": ["data-center-web-controller"],
				"summary": "数据统计分页列表--活动数据统计",
				"description": "数据统计分页列表--活动数据统计",
				"operationId": "activityDataUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "activityQueryParam",
					"description": "activityQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ConsultingReleaseWebQueryParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivityRecruit对象"
						}
					}
				}
			}
		},
		"/new/era/web/dataCenter/core/data": {
			"post": {
				"tags": ["data-center-web-controller"],
				"summary": "数据大屏--中心数据展示",
				"description": "数据大屏--中心数据展示",
				"operationId": "coreDataUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivityRecruit对象"
						}
					}
				}
			}
		},
		"/new/era/web/dataCenter/org/data": {
			"post": {
				"tags": ["data-center-web-controller"],
				"summary": "数据统计分页列表--组织数据统计",
				"description": "数据统计分页列表--组织数据统计",
				"operationId": "orgDataUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "queryParam",
					"description": "queryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ConsultingReleaseWebQueryParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivityRecruit对象"
						}
					}
				}
			}
		},
		"/new/era/web/dataCenter/org/rank": {
			"post": {
				"tags": ["data-center-web-controller"],
				"summary": "数据大屏--团队服务时长排行",
				"description": "数据大屏--团队服务时长排行",
				"operationId": "orgRankUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivityRecruit对象"
						}
					}
				}
			}
		},
		"/new/era/web/dataCenter/sixMonth/credit": {
			"post": {
				"tags": ["data-center-web-controller"],
				"summary": "数据大屏--近六个月信用时数",
				"description": "数据大屏--近六个月信用时数",
				"operationId": "activityDataUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivityRecruit对象"
						}
					}
				}
			}
		},
		"/new/era/web/dataCenter/tenant/configuration": {
			"post": {
				"tags": ["data-center-web-controller"],
				"summary": "数据大屏--租户配置",
				"description": "数据大屏--租户配置",
				"operationId": "tenantConfigurationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/TenantConfiguration对象"
						}
					}
				}
			}
		},
		"/new/era/web/dataCenter/volunteer/draw": {
			"post": {
				"tags": ["data-center-web-controller"],
				"summary": "数据大屏--志愿者画像",
				"description": "数据大屏--志愿者画像",
				"operationId": "volunteerDrawUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivityRecruit对象"
						}
					}
				}
			}
		},
		"/new/era/web/dataCenter/volunteer/org": {
			"post": {
				"tags": ["data-center-web-controller"],
				"summary": "数据大屏--志愿者分布",
				"description": "数据大屏--志愿者分布",
				"operationId": "volunteerOrgUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivityRecruit对象"
						}
					}
				}
			}
		},
		"/new/era/web/dataCenter/volunteer/rank": {
			"post": {
				"tags": ["data-center-web-controller"],
				"summary": "数据大屏--本月志愿者top10",
				"description": "数据大屏--本月志愿者top10",
				"operationId": "volunteerRankUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ActivityRecruit对象"
						}
					}
				}
			}
		},
		"/new/era/web/home/init-user-information": {
			"post": {
				"tags": ["home-web-controller"],
				"summary": "web端初始化用户信息",
				"description": "web端初始化用户信息",
				"operationId": "initUserInformationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeBanner/add": {
			"post": {
				"tags": ["home-banner-web-controller"],
				"summary": "添加HomeBanner对象",
				"description": "添加首页轮播图",
				"operationId": "addHomeBannerUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "homeBanner",
					"description": "homeBanner",
					"required": true,
					"schema": {
						"$ref": "#/definitions/HomeBanner对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeBanner/delete/{id}": {
			"post": {
				"tags": ["home-banner-web-controller"],
				"summary": "删除HomeBanner对象",
				"description": "删除首页轮播图",
				"operationId": "deleteHomeBannerUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeBanner/info/{id}": {
			"get": {
				"tags": ["home-banner-web-controller"],
				"summary": "获取HomeBanner对象详情",
				"description": "查看首页轮播图",
				"operationId": "getHomeBannerUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeBanner/update": {
			"post": {
				"tags": ["home-banner-web-controller"],
				"summary": "修改HomeBanner对象",
				"description": "修改首页轮播图",
				"operationId": "updateHomeBannerUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "homeBanner",
					"description": "homeBanner",
					"required": true,
					"schema": {
						"$ref": "#/definitions/HomeBanner对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeBanner/update-web-num": {
			"post": {
				"tags": ["home-banner-web-controller"],
				"summary": "轮播图上下移动",
				"description": "轮播图上下移动",
				"operationId": "UpdateWebNumUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/HomeBannerWebUpdateParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeBanner/update-web-status": {
			"post": {
				"tags": ["home-banner-web-controller"],
				"summary": "轮播图开启或关闭",
				"description": "轮播图开启或关闭",
				"operationId": "UpdateWebNumUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/HomeBannerUpdateWebStatusParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeConfiguration/add": {
			"post": {
				"tags": ["home-configuration-web-controller"],
				"summary": "添加HomeConfiguration对象",
				"description": "添加首页配置",
				"operationId": "addHomeConfigurationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "homeConfiguration",
					"description": "homeConfiguration",
					"required": true,
					"schema": {
						"$ref": "#/definitions/HomeConfiguration对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeConfiguration/delete/{id}": {
			"post": {
				"tags": ["home-configuration-web-controller"],
				"summary": "删除HomeConfiguration对象",
				"description": "删除首页配置",
				"operationId": "deleteHomeConfigurationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeConfiguration/info/{id}": {
			"get": {
				"tags": ["home-configuration-web-controller"],
				"summary": "获取HomeConfiguration对象详情",
				"description": "查看首页配置",
				"operationId": "getHomeConfigurationUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeConfiguration/query-all-list": {
			"post": {
				"tags": ["home-configuration-web-controller"],
				"summary": "获取首页配置全部内容",
				"description": "获取首页配置全部内容",
				"operationId": "queryAllListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeConfiguration/update": {
			"post": {
				"tags": ["home-configuration-web-controller"],
				"summary": "修改HomeConfiguration对象",
				"description": "修改首页配置",
				"operationId": "updateHomeConfigurationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "homeConfiguration",
					"description": "homeConfiguration",
					"required": true,
					"schema": {
						"$ref": "#/definitions/HomeConfiguration对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeNavigation/add-by-type": {
			"post": {
				"tags": ["home-navigation-web-controller"],
				"summary": "添加首页导航、快捷入口、首页列表，通过type",
				"description": "添加首页导航、快捷入口，首页列表，通过type",
				"operationId": "addByTypeUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/AddByTypeWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeNavigation/delete/{id}": {
			"post": {
				"tags": ["home-navigation-web-controller"],
				"summary": "删除HomeNavigation对象",
				"description": "删除首页导航、快捷入口、列表配置表",
				"operationId": "deleteHomeNavigationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeNavigation/getPageList": {
			"post": {
				"tags": ["home-navigation-web-controller"],
				"summary": "获取HomeNavigation分页列表",
				"description": "首页导航、快捷入口、列表配置表分页列表",
				"operationId": "getHomeNavigationPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "homeNavigationQueryParam",
					"description": "homeNavigationQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/HomeNavigationQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/HomeNavigation对象"
						}
					}
				}
			}
		},
		"/new/era/web/homeNavigation/info/{id}": {
			"get": {
				"tags": ["home-navigation-web-controller"],
				"summary": "获取HomeNavigation对象详情",
				"description": "查看首页导航、快捷入口、列表配置表",
				"operationId": "getHomeNavigationUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeNavigation/query-by-type": {
			"get": {
				"tags": ["home-navigation-web-controller"],
				"summary": "获取首页导航、快捷入口、列表配置，通过type",
				"description": "获取首页导航、快捷入口、列表配置，通过type",
				"operationId": "queryByTypeUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "type",
					"in": "query",
					"description": "type",
					"required": false,
					"type": "integer",
					"format": "int32"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeNavigation/update": {
			"post": {
				"tags": ["home-navigation-web-controller"],
				"summary": "修改HomeNavigation对象",
				"description": "修改首页导航、快捷入口、列表配置表",
				"operationId": "updateHomeNavigationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "homeNavigation",
					"description": "homeNavigation",
					"required": true,
					"schema": {
						"$ref": "#/definitions/HomeNavigation对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeNavigation/update-by-type": {
			"post": {
				"tags": ["home-navigation-web-controller"],
				"summary": "修改首页导航、快捷入口，首页列表，通过type",
				"description": "修改首页导航、快捷入口，首页列表，通过type",
				"operationId": "updateByTypeUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/UpdateByTypeWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeNavigation/update-web-num": {
			"post": {
				"tags": ["home-navigation-web-controller"],
				"summary": "上下移动",
				"description": "上下移动",
				"operationId": "updateWebNumUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/HomeNavigationWebUpdateParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/homeNavigation/update-web-status": {
			"post": {
				"tags": ["home-navigation-web-controller"],
				"summary": "开启或关闭",
				"description": "开启或关闭",
				"operationId": "updateWebStatusUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/HomeNavigationUpdateWebStatusParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/listConfiguration/add": {
			"post": {
				"tags": ["list-configuration-web-controller"],
				"summary": "添加ListConfiguration对象",
				"description": "添加榜单配置",
				"operationId": "addListConfigurationUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "listConfiguration",
					"description": "listConfiguration",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ListConfiguration对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/listConfiguration/delete/{id}": {
			"post": {
				"tags": ["list-configuration-web-controller"],
				"summary": "删除ListConfiguration对象",
				"description": "删除榜单配置",
				"operationId": "deleteListConfigurationUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/listConfiguration/info/{id}": {
			"get": {
				"tags": ["list-configuration-web-controller"],
				"summary": "获取ListConfiguration对象详情",
				"description": "查看榜单配置",
				"operationId": "getListConfigurationUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/listConfiguration/query-all-list": {
			"get": {
				"tags": ["list-configuration-web-controller"],
				"summary": "获取榜单配置、榜单类型",
				"description": "获取榜单配置、榜单类型",
				"operationId": "queryAllListUsingGET_1",
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/listConfiguration/query-all-list-info": {
			"get": {
				"tags": ["list-configuration-web-controller"],
				"summary": "获取榜单配置、榜单类型信息列表",
				"description": "获取榜单配置、榜单类型信息列表",
				"operationId": "queryAllListInfoUsingGET",
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/listConfiguration/query-list": {
			"get": {
				"tags": ["list-configuration-web-controller"],
				"summary": "获取列表",
				"description": "获取列表",
				"operationId": "queryListUsingGET",
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/listConfiguration/update": {
			"post": {
				"tags": ["list-configuration-web-controller"],
				"summary": "修改ListConfiguration对象",
				"description": "修改榜单配置",
				"operationId": "updateListConfigurationUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "listConfiguration",
					"description": "listConfiguration",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ListConfiguration对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/listConfiguration/update-web-status": {
			"post": {
				"tags": ["list-configuration-web-controller"],
				"summary": "榜单修改状态",
				"description": "榜单修改状态",
				"operationId": "updateWebStatusUsingPOST_2",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/UpdateListConfigurationStatusWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/listType/add": {
			"post": {
				"tags": ["list-type-web-controller"],
				"summary": "添加ListType对象",
				"description": "添加榜单类型",
				"operationId": "addListTypeUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "listType",
					"description": "listType",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ListType对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/listType/delete/{id}": {
			"post": {
				"tags": ["list-type-web-controller"],
				"summary": "删除ListType对象",
				"description": "删除榜单类型",
				"operationId": "deleteListTypeUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/listType/info/{id}": {
			"get": {
				"tags": ["list-type-web-controller"],
				"summary": "获取ListType对象详情",
				"description": "查看榜单类型",
				"operationId": "getListTypeUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/listType/query-web-by-listId": {
			"get": {
				"tags": ["list-type-web-controller"],
				"summary": "通过榜单id获取榜单类型列表",
				"description": "通过榜单id获取榜单类型列表",
				"operationId": "queryByListIdUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "listId",
					"in": "query",
					"description": "listId",
					"required": false,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/listType/update": {
			"post": {
				"tags": ["list-type-web-controller"],
				"summary": "修改ListType对象",
				"description": "修改榜单类型",
				"operationId": "updateListTypeUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "listType",
					"description": "listType",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ListType对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/listType/update-web-status": {
			"post": {
				"tags": ["list-type-web-controller"],
				"summary": "榜单类型修改状态",
				"description": "榜单类型修改状态",
				"operationId": "updateWebStatusUsingPOST_3",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/UpdateListTypeStatusWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/orderManage/add": {
			"post": {
				"tags": ["order-manage-web-controller"],
				"summary": "添加OrderManage对象",
				"description": "添加点单管理表",
				"operationId": "addOrderManageUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "orderManage",
					"description": "orderManage",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrderManage对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/orderManage/delete": {
			"post": {
				"tags": ["order-manage-web-controller"],
				"summary": "删除OrderManage对象",
				"description": "删除点单管理表",
				"operationId": "deleteOrderManageUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/orderManage/getPageList": {
			"post": {
				"tags": ["order-manage-web-controller"],
				"summary": "获取OrderManage分页列表",
				"description": "点单管理表分页列表",
				"operationId": "getOrderManagePageListUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "orderManageQueryParam",
					"description": "orderManageQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrderManageQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/OrderManage对象"
						}
					}
				}
			}
		},
		"/new/era/web/orderManage/info/{id}": {
			"get": {
				"tags": ["order-manage-web-controller"],
				"summary": "获取OrderManage对象详情",
				"description": "查看点单管理表",
				"operationId": "getOrderManageUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/orderManage/update": {
			"post": {
				"tags": ["order-manage-web-controller"],
				"summary": "修改OrderManage对象",
				"description": "修改点单管理表",
				"operationId": "updateOrderManageUsingPOST_2",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "orderManage",
					"description": "orderManage",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrderManage对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/orderManage/update/status": {
			"post": {
				"tags": ["order-manage-web-controller"],
				"summary": "点单管理表状态",
				"description": "点单管理表修改状态",
				"operationId": "updateStatusUsingPOST_5",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "statusParam",
					"description": "statusParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/StatusParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/practicePosition/addByParam": {
			"post": {
				"tags": ["practice-position-web-controller"],
				"summary": "web端添加实践阵地",
				"description": "web端添加实践阵地",
				"operationId": "addByParamUsingPOST_2",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/AddAndUpdateByWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/practicePosition/delete": {
			"post": {
				"tags": ["practice-position-web-controller"],
				"summary": "删除PracticePosition对象",
				"description": "删除实践阵地",
				"operationId": "deletePracticePositionUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/practicePosition/get-info-by-id/{id}": {
			"get": {
				"tags": ["practice-position-web-controller"],
				"summary": "web端通过id查询阵地",
				"description": "web端通过id查询阵地",
				"operationId": "getInfoByIdUsingGET_2",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/practicePosition/get-left-list": {
			"get": {
				"tags": ["practice-position-web-controller"],
				"summary": "web端获取左侧阵地列表",
				"description": "web端获取左侧阵地列表",
				"operationId": "getLeftListUsingGET",
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/practicePosition/query-page-by-param": {
			"get": {
				"tags": ["practice-position-web-controller"],
				"summary": "web端多条件分页查询",
				"description": "web端多条件分页查询",
				"operationId": "queryPageByParamUsingGET_2",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "practiceName",
					"in": "query",
					"description": "实践点名称",
					"required": false,
					"type": "string"
				}, {
					"name": "id",
					"in": "query",
					"description": "站点id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/practicePosition/update-by-param": {
			"post": {
				"tags": ["practice-position-web-controller"],
				"summary": "web端修改阵地",
				"description": "web端修改阵地",
				"operationId": "updateByParamUsingPOST_2",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/AddAndUpdateByWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/region/add": {
			"post": {
				"tags": ["region-web-controller"],
				"summary": "添加Region对象",
				"description": "添加区域表",
				"operationId": "addRegionUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "region",
					"description": "region",
					"required": true,
					"schema": {
						"$ref": "#/definitions/Region对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/region/delete/{id}": {
			"post": {
				"tags": ["region-web-controller"],
				"summary": "删除Region对象",
				"description": "删除区域表",
				"operationId": "deleteRegionUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/region/getList": {
			"post": {
				"tags": ["region-web-controller"],
				"summary": "区域表列表",
				"description": "区域表列表",
				"operationId": "getRegionListUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "regionQueryParam",
					"description": "regionQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/RegionQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/Region对象"
						}
					}
				}
			}
		},
		"/new/era/web/region/getRegionList": {
			"get": {
				"tags": ["region-web-controller"],
				"summary": "web查询区域",
				"description": "web查询区域",
				"operationId": "getListUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "query",
					"description": "当前区域id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "type",
					"in": "query",
					"description": "区域类型 0：市 1：区",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "serviceType",
					"in": "query",
					"description": "服务类型 0:活动报名 1:活动服务 2:点单服务",
					"required": false,
					"type": "integer",
					"format": "int32"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/Region对象"
						}
					}
				}
			}
		},
		"/new/era/web/region/info/{id}": {
			"get": {
				"tags": ["region-web-controller"],
				"summary": "获取Region对象详情",
				"description": "查看区域表",
				"operationId": "getRegionUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/region/update": {
			"post": {
				"tags": ["region-web-controller"],
				"summary": "修改Region对象",
				"description": "修改区域表",
				"operationId": "updateRegionUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "region",
					"description": "region",
					"required": true,
					"schema": {
						"$ref": "#/definitions/Region对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/serviceManage/add": {
			"post": {
				"tags": ["service-manage-web-controller"],
				"summary": "添加ServiceManage对象",
				"description": "添加服务管理表",
				"operationId": "addServiceManageUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "serviceManage",
					"description": "serviceManage",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ServiceManage对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/serviceManage/delete": {
			"post": {
				"tags": ["service-manage-web-controller"],
				"summary": "删除ServiceManage对象",
				"description": "删除服务管理表",
				"operationId": "deleteServiceManageUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/serviceManage/getPageList": {
			"post": {
				"tags": ["service-manage-web-controller"],
				"summary": "获取ServiceManage分页列表",
				"description": "服务管理表分页列表",
				"operationId": "getServiceManagePageListUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "serviceManageQueryParam",
					"description": "serviceManageQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ServiceManageQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/ServiceManage对象"
						}
					}
				}
			}
		},
		"/new/era/web/serviceManage/info/{id}": {
			"get": {
				"tags": ["service-manage-web-controller"],
				"summary": "获取ServiceManage对象详情",
				"description": "查看服务管理表",
				"operationId": "getServiceManageUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/serviceManage/update": {
			"post": {
				"tags": ["service-manage-web-controller"],
				"summary": "修改ServiceManage对象",
				"description": "修改服务管理表",
				"operationId": "updateServiceManageUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "serviceManage",
					"description": "serviceManage",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ServiceManage对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/serviceManage/update/status": {
			"post": {
				"tags": ["service-manage-web-controller"],
				"summary": "服务管理表状态",
				"description": "服务管理表修改状态",
				"operationId": "updateStatusUsingPOST_6",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "statusParam",
					"description": "statusParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/StatusParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/typeConfiguration/add": {
			"post": {
				"tags": ["type-configuration-web-controller"],
				"summary": "添加TypeConfiguration对象",
				"description": "添加类型配置",
				"operationId": "addTypeConfigurationUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "typeConfiguration",
					"description": "typeConfiguration",
					"required": true,
					"schema": {
						"$ref": "#/definitions/TypeConfiguration对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/typeConfiguration/delete/{id}": {
			"post": {
				"tags": ["type-configuration-web-controller"],
				"summary": "删除TypeConfiguration对象",
				"description": "删除类型配置",
				"operationId": "deleteTypeConfigurationUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/typeConfiguration/info/{id}": {
			"get": {
				"tags": ["type-configuration-web-controller"],
				"summary": "获取TypeConfiguration对象详情",
				"description": "查看类型配置",
				"operationId": "getTypeConfigurationUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/typeConfiguration/query-all-list": {
			"get": {
				"tags": ["type-configuration-web-controller"],
				"summary": "获取所有配置",
				"description": "获取所有配置",
				"operationId": "queryAllListUsingGET_2",
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/typeConfiguration/query-consulting-release-list": {
			"post": {
				"tags": ["type-configuration-web-controller"],
				"summary": "获取资讯栏目类型列表",
				"description": "获取资讯栏目类型列表",
				"operationId": "queryConsultingReleaseListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/TypeConfigurationWebQueryParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/typeConfiguration/query-web-list": {
			"get": {
				"tags": ["type-configuration-web-controller"],
				"summary": "获取课堂栏目类型列表",
				"description": "获取课堂栏目类型列表",
				"operationId": "queryWebListUsingGET",
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/typeConfiguration/update": {
			"post": {
				"tags": ["type-configuration-web-controller"],
				"summary": "修改TypeConfiguration对象",
				"description": "修改类型配置",
				"operationId": "updateTypeConfigurationUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "typeConfiguration",
					"description": "typeConfiguration",
					"required": true,
					"schema": {
						"$ref": "#/definitions/TypeConfiguration对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/user/add": {
			"post": {
				"tags": ["user-web-controller"],
				"summary": "添加User对象",
				"description": "添加用户信息表",
				"operationId": "addUserUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "user",
					"description": "user",
					"required": true,
					"schema": {
						"$ref": "#/definitions/User对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/user/delete/{id}": {
			"post": {
				"tags": ["user-web-controller"],
				"summary": "删除User对象",
				"description": "删除用户信息表",
				"operationId": "deleteUserUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/user/getPageList": {
			"post": {
				"tags": ["user-web-controller"],
				"summary": "获取User分页列表",
				"description": "用户信息表分页列表",
				"operationId": "getUserPageListUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "userQueryParam",
					"description": "userQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/UserQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/User对象"
						}
					}
				}
			}
		},
		"/new/era/web/user/info/{id}": {
			"get": {
				"tags": ["user-web-controller"],
				"summary": "获取User对象详情",
				"description": "查看用户信息表",
				"operationId": "getUserUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/user/query-IAMUserInfo": {
			"get": {
				"tags": ["user-web-controller"],
				"summary": "获取用户信息",
				"description": "获取用户信息",
				"operationId": "queryIAMUserInfoUsingGET",
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/user/query-admin-role-info/{userId}": {
			"post": {
				"tags": ["user-web-controller"],
				"summary": "获取新时代web用户角色",
				"description": "获取新时代web用户角色",
				"operationId": "queryAdminRoleInfoUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "userId",
					"in": "path",
					"description": "userId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/user/query-tenentId-by-appId/{appId}": {
			"post": {
				"tags": ["user-web-controller"],
				"summary": "通过appId获取租户id",
				"description": "通过appId获取租户id",
				"operationId": "queryTenentIdByAppIdUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "appId",
					"in": "path",
					"description": "appId",
					"required": true,
					"type": "integer",
					"format": "int32"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/user/query-user-by-tenentMessage": {
			"get": {
				"tags": ["user-web-controller"],
				"summary": "通过当前用户获取租户信息",
				"description": "通过当前用户获取租户信息",
				"operationId": "queryUserByTenentMessageUsingGET",
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/user/query-user-web-info/{userId}": {
			"post": {
				"tags": ["user-web-controller"],
				"summary": "获取web用户详情",
				"description": "获取web用户详情",
				"operationId": "queryUserWebInfoUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "userId",
					"in": "path",
					"description": "userId",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/user/update-web-user": {
			"post": {
				"tags": ["user-web-controller"],
				"summary": "web修改用户信息",
				"description": "web修改用户信息",
				"operationId": "updateUserUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/UserWebUpdateParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteer/add": {
			"post": {
				"tags": ["volunteer-web-controller"],
				"summary": "添加Volunteer对象",
				"description": "添加志愿者管理表",
				"operationId": "addVolunteerUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteer",
					"description": "volunteer",
					"required": true,
					"schema": {
						"$ref": "#/definitions/Volunteer对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteer/delete": {
			"post": {
				"tags": ["volunteer-web-controller"],
				"summary": "删除Volunteer对象",
				"description": "删除志愿者管理表",
				"operationId": "deleteVolunteerUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteer/export": {
			"get": {
				"tags": ["volunteer-web-controller"],
				"summary": "web端导出志愿者信息",
				"description": "web端导出志愿者信息",
				"operationId": "exportTeamInUsingGET_2",
				"produces": ["*/*"],
				"parameters": [{
					"name": "ids",
					"in": "query",
					"description": "志愿者id",
					"required": false,
					"type": "array",
					"items": {
						"type": "integer",
						"format": "int64"
					},
					"collectionFormat": "multi"
				}],
				"responses": {
					"200": {
						"description": "OK"
					}
				}
			}
		},
		"/new/era/web/volunteer/getPageList": {
			"post": {
				"tags": ["volunteer-web-controller"],
				"summary": "获取Volunteer分页列表",
				"description": "志愿者管理表分页列表",
				"operationId": "getVolunteerPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteerQueryParam",
					"description": "volunteerQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/VolunteerQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/Volunteer对象"
						}
					}
				}
			}
		},
		"/new/era/web/volunteer/getPageList/register": {
			"post": {
				"tags": ["volunteer-web-controller"],
				"summary": "志愿者管理表注册审核分页列表",
				"description": "志愿者管理表注册审核分页列表",
				"operationId": "getVolunteerPageListRegisterUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteerQueryParam",
					"description": "volunteerQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/VolunteerQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/Volunteer对象"
						}
					}
				}
			}
		},
		"/new/era/web/volunteer/getSimpleList": {
			"post": {
				"tags": ["volunteer-web-controller"],
				"summary": "志愿者列表",
				"description": "志愿者列表",
				"operationId": "getSimpleListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteerQueryParam",
					"description": "volunteerQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/VolunteerQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/VolunteerVo"
						}
					}
				}
			}
		},
		"/new/era/web/volunteer/import": {
			"post": {
				"tags": ["volunteer-web-controller"],
				"summary": "upload",
				"operationId": "uploadUsingPOST_1",
				"consumes": ["multipart/form-data"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "file",
					"in": "formData",
					"description": "file",
					"required": false,
					"type": "file"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteer/info/{id}": {
			"get": {
				"tags": ["volunteer-web-controller"],
				"summary": "获取Volunteer对象详情",
				"description": "查看志愿者管理表",
				"operationId": "getVolunteerUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteer/template": {
			"get": {
				"tags": ["volunteer-web-controller"],
				"summary": "web端导入志愿者模板文件下载",
				"description": "web端导入志愿者模板文件下载",
				"operationId": "templateDownloadUsingGET",
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK"
					}
				}
			}
		},
		"/new/era/web/volunteer/update": {
			"post": {
				"tags": ["volunteer-web-controller"],
				"summary": "修改Volunteer对象",
				"description": "修改志愿者管理表",
				"operationId": "updateVolunteerUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteer",
					"description": "volunteer",
					"required": true,
					"schema": {
						"$ref": "#/definitions/Volunteer对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteer/update/status": {
			"post": {
				"tags": ["volunteer-web-controller"],
				"summary": "志愿者管理表状态",
				"description": "志愿者管理表修改状态",
				"operationId": "updateStatusUsingPOST_8",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "statusParam",
					"description": "statusParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/StatusParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerAudit/add": {
			"post": {
				"tags": ["volunteer-audit-controller"],
				"summary": "添加VolunteerAudit对象",
				"description": "添加志愿者审核表",
				"operationId": "addVolunteerAuditUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteerAudit",
					"description": "volunteerAudit",
					"required": true,
					"schema": {
						"$ref": "#/definitions/VolunteerAudit对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerAudit/delete": {
			"post": {
				"tags": ["volunteer-audit-controller"],
				"summary": "删除VolunteerAudit对象",
				"description": "删除志愿者审核表",
				"operationId": "deleteVolunteerAuditUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerAudit/getPageList": {
			"post": {
				"tags": ["volunteer-audit-controller"],
				"summary": "获取VolunteerAudit分页列表",
				"description": "志愿者审核表分页列表",
				"operationId": "getVolunteerAuditPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteerAuditQueryParam",
					"description": "volunteerAuditQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/VolunteerAuditQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/VolunteerAudit对象"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerAudit/info/{id}": {
			"get": {
				"tags": ["volunteer-audit-controller"],
				"summary": "获取VolunteerAudit对象详情",
				"description": "查看志愿者审核表",
				"operationId": "getVolunteerAuditUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerAudit/update": {
			"post": {
				"tags": ["volunteer-audit-controller"],
				"summary": "修改VolunteerAudit对象",
				"description": "修改志愿者审核表",
				"operationId": "updateVolunteerAuditUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteerAudit",
					"description": "volunteerAudit",
					"required": true,
					"schema": {
						"$ref": "#/definitions/VolunteerAudit对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerAudit/update/status": {
			"post": {
				"tags": ["volunteer-audit-controller"],
				"summary": "志愿者审核表修改状态",
				"description": "志愿者审核表修改状态",
				"operationId": "updateStatusUsingPOST_7",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "statusParam",
					"description": "statusParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/StatusParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamAudit/add": {
			"post": {
				"tags": ["volunteer-team-audit-web-controller"],
				"summary": "添加VolunteerTeamAudit对象",
				"description": "添加志愿队伍-队伍审核表",
				"operationId": "addVolunteerTeamAuditUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteerTeamAudit",
					"description": "volunteerTeamAudit",
					"required": true,
					"schema": {
						"$ref": "#/definitions/VolunteerTeamAudit对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamAudit/delete": {
			"post": {
				"tags": ["volunteer-team-audit-web-controller"],
				"summary": "删除VolunteerTeamAudit对象",
				"description": "删除志愿队伍-队伍审核表",
				"operationId": "deleteVolunteerTeamAuditUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "ids",
					"in": "query",
					"description": "ids",
					"required": true,
					"type": "array",
					"items": {
						"type": "integer",
						"format": "int64"
					},
					"collectionFormat": "multi"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamAudit/info/{id}": {
			"get": {
				"tags": ["volunteer-team-audit-web-controller"],
				"summary": "获取VolunteerTeamAudit对象详情",
				"description": "查看志愿队伍-队伍审核表",
				"operationId": "getVolunteerTeamAuditUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamAudit/query-page-by-param": {
			"get": {
				"tags": ["volunteer-team-audit-web-controller"],
				"summary": "web端分页查询",
				"description": "web端分页查询",
				"operationId": "queryPageByParamUsingGET_3",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "name",
					"in": "query",
					"description": "机构名称",
					"required": false,
					"type": "string"
				}, {
					"name": "status",
					"in": "query",
					"description": "状态 1 待审核 , 2 已审核 , 3 已驳回 ",
					"required": false,
					"type": "integer",
					"format": "int32"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamAudit/update": {
			"post": {
				"tags": ["volunteer-team-audit-web-controller"],
				"summary": "修改VolunteerTeamAudit对象",
				"description": "修改志愿队伍-队伍审核表",
				"operationId": "updateVolunteerTeamAuditUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteerTeamAudit",
					"description": "volunteerTeamAudit",
					"required": true,
					"schema": {
						"$ref": "#/definitions/VolunteerTeamAudit对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamAudit/update-status-by-param": {
			"post": {
				"tags": ["volunteer-team-audit-web-controller"],
				"summary": "web端审核组织",
				"description": "web端审核组织",
				"operationId": "updateStatusByParamUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/updateStatusTeamWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamIn/add": {
			"post": {
				"tags": ["volunteer-team-in-web-controller"],
				"summary": "添加VolunteerTeamIn对象",
				"description": "添加志愿队伍-队伍入驻表",
				"operationId": "addVolunteerTeamInUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteerTeamIn",
					"description": "volunteerTeamIn",
					"required": true,
					"schema": {
						"$ref": "#/definitions/VolunteerTeamIn对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamIn/delete/{id}": {
			"post": {
				"tags": ["volunteer-team-in-web-controller"],
				"summary": "删除VolunteerTeamIn对象",
				"description": "删除志愿队伍-队伍入驻表",
				"operationId": "deleteVolunteerTeamInUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamIn/export-team-in": {
			"get": {
				"tags": ["volunteer-team-in-web-controller"],
				"summary": "web端导出入驻组织信息",
				"description": "web端导出入驻组织信息",
				"operationId": "exportTeamInUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "ids",
					"in": "query",
					"required": false,
					"type": "array",
					"items": {
						"type": "integer",
						"format": "int64"
					},
					"collectionFormat": "multi"
				}],
				"responses": {
					"200": {
						"description": "OK"
					}
				}
			}
		},
		"/new/era/web/volunteerTeamIn/info/{id}": {
			"get": {
				"tags": ["volunteer-team-in-web-controller"],
				"summary": "获取VolunteerTeamIn对象详情",
				"description": "查看志愿队伍-队伍入驻表",
				"operationId": "getVolunteerTeamInUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamIn/query-page-by-param": {
			"get": {
				"tags": ["volunteer-team-in-web-controller"],
				"summary": "web端多条件分页查询",
				"description": "web端多条件分页查询",
				"operationId": "queryPageByParamUsingGET_4",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "queryStartDate",
					"in": "query",
					"description": "查询开始时间",
					"required": false,
					"type": "string",
					"format": "date-time"
				}, {
					"name": "queryEndDate",
					"in": "query",
					"description": "查询结束时间",
					"required": false,
					"type": "string",
					"format": "date-time"
				}, {
					"name": "province",
					"in": "query",
					"description": "省份",
					"required": false,
					"type": "string"
				}, {
					"name": "city",
					"in": "query",
					"description": "城市",
					"required": false,
					"type": "string"
				}, {
					"name": "area",
					"in": "query",
					"description": "区县",
					"required": false,
					"type": "string"
				}, {
					"name": "name",
					"in": "query",
					"description": "组织名称",
					"required": false,
					"type": "string"
				}, {
					"name": "status",
					"in": "query",
					"description": "状态 0 全部 , 1 待审核 , 2 已审核 ,3 已驳回 ,4 已生成 ,5 未生成 ",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "register",
					"in": "query",
					"description": "民政登记状态 0：否，1：是, 2 全部",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "type",
					"in": "query",
					"description": "组织类型",
					"required": false,
					"type": "string"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamIn/selection-delete": {
			"post": {
				"tags": ["volunteer-team-in-web-controller"],
				"summary": "web端多选删除",
				"description": "web端多选删除",
				"operationId": "selectionDeleteUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "ids",
					"in": "query",
					"description": "ids",
					"required": true,
					"type": "array",
					"items": {
						"type": "integer",
						"format": "int64"
					},
					"collectionFormat": "multi"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamIn/update": {
			"post": {
				"tags": ["volunteer-team-in-web-controller"],
				"summary": "修改VolunteerTeamIn对象",
				"description": "修改志愿队伍-队伍入驻表",
				"operationId": "updateVolunteerTeamInUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteerTeamIn",
					"description": "volunteerTeamIn",
					"required": true,
					"schema": {
						"$ref": "#/definitions/VolunteerTeamIn对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamIn/update-status-by-param": {
			"post": {
				"tags": ["volunteer-team-in-web-controller"],
				"summary": "web端审核入驻队伍",
				"description": "web端审核入驻队伍",
				"operationId": "updateStatusByParamUsingPOST_2",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/UpdateStatusInWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/add-by-param": {
			"post": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "web端添加队伍",
				"description": "web端添加队伍",
				"operationId": "addByParamUsingPOST_4",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/AddOrUpdateWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/apply-top-org": {
			"post": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "web端申请上级组织",
				"description": "web端申请上级组织",
				"operationId": "applyTopOrgUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/ApplyOrgWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/delete": {
			"post": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "删除VolunteerTeamManagement对象",
				"description": "删除志愿队伍-队伍管理表",
				"operationId": "deleteVolunteerTeamManagementUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/delete-web-batch": {
			"post": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "web批量删除",
				"description": "web批量删除",
				"operationId": "deleteWebBatchUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteBatchWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/get-info-by-id/{id}": {
			"get": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "web端查看队伍信息",
				"description": "web端查看队伍信息",
				"operationId": "getInfoByIdUsingGET_3",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/get-left-list": {
			"get": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "web端获取左侧组织列表",
				"description": "web端获取左侧组织列表",
				"operationId": "getLeftListUsingGET_1",
				"produces": ["*/*"],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/get-organization-all-path/{name}": {
			"get": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "web端查看组织全路径详情",
				"description": "web端查看组织全路径详情",
				"operationId": "getOrganizationAllPathUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "name",
					"in": "path",
					"description": "name",
					"required": true,
					"type": "string"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/get-organization-information-perfect/{id}": {
			"get": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "web端获取组织完善信息",
				"description": "web端获取组织完善信息",
				"operationId": "getOrganizationInformationPerfectUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/get-this-level-admin": {
			"post": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "web端查看本级管理员",
				"description": "web端查看本级管理员",
				"operationId": "getThisLevelAdminUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/QueryAdminWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/out-now-top-org": {
			"post": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "web端退出上级组织",
				"description": "web端退出上级组织",
				"operationId": "outNowTopOrgUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/outNowOrgWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/query-orgName-by-code/{code}": {
			"get": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "web端通过组织编码查询组织名称",
				"description": "web端通过组织编码查询组织名称",
				"operationId": "queryOrgNameByCodeUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "code",
					"in": "path",
					"description": "code",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/query-page-by-param": {
			"get": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "web端多条件分页查询",
				"description": "web端多条件分页查询",
				"operationId": "queryPageByParamUsingGET_6",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "organizationName",
					"in": "query",
					"description": "组织名称",
					"required": false,
					"type": "string"
				}, {
					"name": "volunteerStatus",
					"in": "query",
					"description": "组织状态 0 禁用 , 1 启用 , 2 所有",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "range",
					"in": "query",
					"description": "范围 0 本级 , 1 所有",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "status",
					"in": "query",
					"description": "民政登记状态 0 否 , 1 是 , 2 全部",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "type",
					"in": "query",
					"description": "组织类型",
					"required": false,
					"type": "string"
				}, {
					"name": "infoStatus",
					"in": "query",
					"description": "信息状态 0 未完善 , 1 信息审核中 , 2 未完善 , 3 全部",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "id",
					"in": "query",
					"description": "队伍id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/query-select-by-param": {
			"get": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "web端队伍下拉框",
				"description": "web端队伍下拉框",
				"operationId": "querySelectByParamUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "current",
					"in": "query",
					"description": "页码,默认为1",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "size",
					"in": "query",
					"description": "页大小,默认为10",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "keyword",
					"in": "query",
					"description": "搜索字符串",
					"required": false,
					"type": "string"
				}, {
					"name": "organizationName",
					"in": "query",
					"description": "组织名称",
					"required": false,
					"type": "string"
				}, {
					"name": "volunteerStatus",
					"in": "query",
					"description": "组织状态 0 禁用 , 1 启用 , 2 所有",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "range",
					"in": "query",
					"description": "范围 0 本级 , 1 所有",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "status",
					"in": "query",
					"description": "民政登记状态 0 否 , 1 是 , 2 全部",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "type",
					"in": "query",
					"description": "组织类型",
					"required": false,
					"type": "string"
				}, {
					"name": "infoStatus",
					"in": "query",
					"description": "信息状态 0 未完善 , 1 信息审核中 , 2 未完善 , 3 全部",
					"required": false,
					"type": "integer",
					"format": "int32"
				}, {
					"name": "id",
					"in": "query",
					"description": "队伍id",
					"required": false,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/selection-operation": {
			"post": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "web端多选操作队伍",
				"description": "web端多选操作队伍",
				"operationId": "selectionOperationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/SelectionOperationWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/update-by-param": {
			"post": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "web端修改队伍",
				"description": "web端修改队伍",
				"operationId": "updateByParamUsingPOST_3",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "param",
					"description": "param",
					"required": true,
					"schema": {
						"$ref": "#/definitions/AddOrUpdateWebParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/volunteerTeamManagement/update-organization-information-perfect": {
			"post": {
				"tags": ["volunteer-team-management-web-controller"],
				"summary": "web端修改组织完善信息",
				"description": "web端修改组织完善信息",
				"operationId": "UpdateOrganizationInformationPerfectUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "perfect",
					"description": "perfect",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrganizationInformationPerfect对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/wishManage/add": {
			"post": {
				"tags": ["wish-manage-web-controller"],
				"summary": "添加WishManage对象",
				"description": "添加心愿列表",
				"operationId": "addWishManageUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "wishManage",
					"description": "wishManage",
					"required": true,
					"schema": {
						"$ref": "#/definitions/WishManage对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/wishManage/delete": {
			"post": {
				"tags": ["wish-manage-web-controller"],
				"summary": "删除WishManage对象",
				"description": "删除心愿列表",
				"operationId": "deleteWishManageUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "deleteIds",
					"description": "deleteIds",
					"required": true,
					"schema": {
						"$ref": "#/definitions/DeleteIds"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/wishManage/getPageList": {
			"post": {
				"tags": ["wish-manage-web-controller"],
				"summary": "获取WishManage分页列表",
				"description": "心愿列表分页列表",
				"operationId": "getWishManagePageListUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "wishManageQueryParam",
					"description": "wishManageQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/WishManageQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WishManage对象"
						}
					}
				}
			}
		},
		"/new/era/web/wishManage/info/{id}": {
			"get": {
				"tags": ["wish-manage-web-controller"],
				"summary": "获取WishManage对象详情",
				"description": "查看心愿列表",
				"operationId": "getWishManageUsingGET_1",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/wishManage/update": {
			"post": {
				"tags": ["wish-manage-web-controller"],
				"summary": "修改WishManage对象",
				"description": "修改心愿列表",
				"operationId": "updateWishManageUsingPOST_1",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "wishManage",
					"description": "wishManage",
					"required": true,
					"schema": {
						"$ref": "#/definitions/WishManage对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/new/era/web/wishManage/update/status": {
			"post": {
				"tags": ["wish-manage-web-controller"],
				"summary": "心愿列表状态",
				"description": "心愿列表修改状态",
				"operationId": "updateStatusUsingPOST_9",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "statusParam",
					"description": "statusParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/StatusParam"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/organizationInformationPerfect/add": {
			"post": {
				"tags": ["organization-information-perfect-controller"],
				"summary": "添加OrganizationInformationPerfect对象",
				"description": "添加组织信息完善表",
				"operationId": "addOrganizationInformationPerfectUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "organizationInformationPerfect",
					"description": "organizationInformationPerfect",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrganizationInformationPerfect对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/organizationInformationPerfect/delete/{id}": {
			"post": {
				"tags": ["organization-information-perfect-controller"],
				"summary": "删除OrganizationInformationPerfect对象",
				"description": "删除组织信息完善表",
				"operationId": "deleteOrganizationInformationPerfectUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/organizationInformationPerfect/getPageList": {
			"post": {
				"tags": ["organization-information-perfect-controller"],
				"summary": "获取OrganizationInformationPerfect分页列表",
				"description": "组织信息完善表分页列表",
				"operationId": "getOrganizationInformationPerfectPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "organizationInformationPerfectQueryParam",
					"description": "organizationInformationPerfectQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrganizationInformationPerfectQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/OrganizationInformationPerfect对象"
						}
					}
				}
			}
		},
		"/organizationInformationPerfect/info/{id}": {
			"get": {
				"tags": ["organization-information-perfect-controller"],
				"summary": "获取OrganizationInformationPerfect对象详情",
				"description": "查看组织信息完善表",
				"operationId": "getOrganizationInformationPerfectUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/organizationInformationPerfect/update": {
			"post": {
				"tags": ["organization-information-perfect-controller"],
				"summary": "修改OrganizationInformationPerfect对象",
				"description": "修改组织信息完善表",
				"operationId": "updateOrganizationInformationPerfectUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "organizationInformationPerfect",
					"description": "organizationInformationPerfect",
					"required": true,
					"schema": {
						"$ref": "#/definitions/OrganizationInformationPerfect对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/tenantConfiguration/add": {
			"post": {
				"tags": ["tenant-configuration-controller"],
				"summary": "添加TenantConfiguration对象",
				"description": "添加租户配置表",
				"operationId": "addTenantConfigurationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "tenantConfiguration",
					"description": "tenantConfiguration",
					"required": true,
					"schema": {
						"$ref": "#/definitions/TenantConfiguration对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/tenantConfiguration/delete/{id}": {
			"post": {
				"tags": ["tenant-configuration-controller"],
				"summary": "删除TenantConfiguration对象",
				"description": "删除租户配置表",
				"operationId": "deleteTenantConfigurationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/tenantConfiguration/info/{id}": {
			"get": {
				"tags": ["tenant-configuration-controller"],
				"summary": "获取TenantConfiguration对象详情",
				"description": "查看租户配置表",
				"operationId": "getTenantConfigurationUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/tenantConfiguration/update": {
			"post": {
				"tags": ["tenant-configuration-controller"],
				"summary": "修改TenantConfiguration对象",
				"description": "修改租户配置表",
				"operationId": "updateTenantConfigurationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "tenantConfiguration",
					"description": "tenantConfiguration",
					"required": true,
					"schema": {
						"$ref": "#/definitions/TenantConfiguration对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/volunteerTeamExternalTopOrganization/add": {
			"post": {
				"tags": ["volunteer-team-external-top-organization-controller"],
				"summary": "添加VolunteerTeamExternalTopOrganization对象",
				"description": "添加志愿队伍-外部上级组织表",
				"operationId": "addVolunteerTeamExternalTopOrganizationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteerTeamExternalTopOrganization",
					"description": "volunteerTeamExternalTopOrganization",
					"required": true,
					"schema": {
						"$ref": "#/definitions/VolunteerTeamExternalTopOrganization对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/volunteerTeamExternalTopOrganization/delete/{id}": {
			"post": {
				"tags": ["volunteer-team-external-top-organization-controller"],
				"summary": "删除VolunteerTeamExternalTopOrganization对象",
				"description": "删除志愿队伍-外部上级组织表",
				"operationId": "deleteVolunteerTeamExternalTopOrganizationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/volunteerTeamExternalTopOrganization/getPageList": {
			"post": {
				"tags": ["volunteer-team-external-top-organization-controller"],
				"summary": "获取VolunteerTeamExternalTopOrganization分页列表",
				"description": "志愿队伍-外部上级组织表分页列表",
				"operationId": "getVolunteerTeamExternalTopOrganizationPageListUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteerTeamExternalTopOrganizationQueryParam",
					"description": "volunteerTeamExternalTopOrganizationQueryParam",
					"required": true,
					"schema": {
						"$ref": "#/definitions/VolunteerTeamExternalTopOrganizationQueryParam对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/VolunteerTeamExternalTopOrganization对象"
						}
					}
				}
			}
		},
		"/volunteerTeamExternalTopOrganization/info/{id}": {
			"get": {
				"tags": ["volunteer-team-external-top-organization-controller"],
				"summary": "获取VolunteerTeamExternalTopOrganization对象详情",
				"description": "查看志愿队伍-外部上级组织表",
				"operationId": "getVolunteerTeamExternalTopOrganizationUsingGET",
				"produces": ["*/*"],
				"parameters": [{
					"name": "id",
					"in": "path",
					"description": "id",
					"required": true,
					"type": "integer",
					"format": "int64"
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		},
		"/volunteerTeamExternalTopOrganization/update": {
			"post": {
				"tags": ["volunteer-team-external-top-organization-controller"],
				"summary": "修改VolunteerTeamExternalTopOrganization对象",
				"description": "修改志愿队伍-外部上级组织表",
				"operationId": "updateVolunteerTeamExternalTopOrganizationUsingPOST",
				"consumes": ["application/json"],
				"produces": ["*/*"],
				"parameters": [{
					"in": "body",
					"name": "volunteerTeamExternalTopOrganization",
					"description": "volunteerTeamExternalTopOrganization",
					"required": true,
					"schema": {
						"$ref": "#/definitions/VolunteerTeamExternalTopOrganization对象"
					}
				}],
				"responses": {
					"200": {
						"description": "OK",
						"schema": {
							"$ref": "#/definitions/WGJsonResult"
						}
					}
				}
			}
		}
	},
	"definitions": {
		"ActivityCategoryVo": {
			"type": "object",
			"properties": {
				"category": {
					"type": "string",
					"description": "分类名",
					"allowEmptyValue": false
				},
				"num": {
					"type": "string",
					"description": "次数",
					"allowEmptyValue": false
				},
				"percentage": {
					"type": "string",
					"description": "占比",
					"allowEmptyValue": false
				}
			},
			"title": "ActivityCategoryVo",
			"description": "活动分类占比出参"
		},
		"ActivityDataSumVo": {
			"type": "object",
			"properties": {
				"actRecNum": {
					"type": "string",
					"description": "招募活动数量",
					"allowEmptyValue": false
				},
				"actSignEffectNum": {
					"type": "string",
					"description": "签到活动有效数量",
					"allowEmptyValue": false
				},
				"actSignNum": {
					"type": "string",
					"description": "签到活动数量",
					"allowEmptyValue": false
				},
				"actSignTime": {
					"type": "string",
					"description": "签到活动总时长",
					"allowEmptyValue": false
				},
				"actSignVolNum": {
					"type": "string",
					"description": "活动人数",
					"allowEmptyValue": false
				},
				"actSignVolTimes": {
					"type": "string",
					"description": "活动人次",
					"allowEmptyValue": false
				}
			},
			"title": "ActivityDataSumVo",
			"description": "活动数据合计出参"
		},
		"ActivityDataVo": {
			"type": "object",
			"properties": {
				"actRecNum": {
					"type": "string",
					"description": "招募活动数量",
					"allowEmptyValue": false
				},
				"actSignEffectNum": {
					"type": "string",
					"description": "签到活动有效数量",
					"allowEmptyValue": false
				},
				"actSignNum": {
					"type": "string",
					"description": "签到活动数量",
					"allowEmptyValue": false
				},
				"actSignTime": {
					"type": "string",
					"description": "签到活动总时长",
					"allowEmptyValue": false
				},
				"actSignVolNum": {
					"type": "string",
					"description": "活动人数",
					"allowEmptyValue": false
				},
				"actSignVolTimes": {
					"type": "string",
					"description": "活动人次",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "组织name",
					"allowEmptyValue": false
				},
				"orgId": {
					"type": "string",
					"description": "组织id",
					"allowEmptyValue": false
				}
			},
			"title": "ActivityDataVo",
			"description": "活动数据分页出参"
		},
		"ActivityRecruitQueryParam对象": {
			"type": "object",
			"properties": {
				"activityBeginTime": {
					"type": "string",
					"format": "date-time",
					"description": "活动开始时间",
					"allowEmptyValue": false
				},
				"activityEndTime": {
					"type": "string",
					"format": "date-time",
					"description": "活动结束时间",
					"allowEmptyValue": false
				},
				"category": {
					"type": "string",
					"description": "活动类别",
					"allowEmptyValue": false
				},
				"city": {
					"type": "string",
					"description": "当前登录人所属市",
					"allowEmptyValue": false
				},
				"creatorName": {
					"type": "string",
					"description": "创建人用户id",
					"allowEmptyValue": false
				},
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"currentUserOrgId": {
					"type": "string",
					"description": "当前登录人组织id",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "活动招募名称",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"orgId": {
					"type": "string",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				},
				"status": {
					"type": "string",
					"description": "状态，0：待提交，1：待审核，2：已审核，3：已驳回，4：已结束",
					"allowEmptyValue": false
				},
				"streetTown": {
					"type": "string",
					"description": "所属街镇",
					"allowEmptyValue": false
				}
			},
			"title": "ActivityRecruitQueryParam对象",
			"description": "活动招募表查询参数"
		},
		"ActivityRecruit对象": {
			"type": "object",
			"properties": {
				"activityBeginTime": {
					"type": "string",
					"format": "date-time",
					"description": "活动开始时间",
					"allowEmptyValue": false
				},
				"activityEndTime": {
					"type": "string",
					"format": "date-time",
					"description": "活动结束时间",
					"allowEmptyValue": false
				},
				"address": {
					"type": "string",
					"description": "详细地址",
					"allowEmptyValue": false
				},
				"auditId": {
					"type": "integer",
					"format": "int64",
					"description": "审核人id",
					"allowEmptyValue": false
				},
				"auditName": {
					"type": "string",
					"description": "审核人名",
					"allowEmptyValue": false
				},
				"auditOpinion": {
					"type": "string",
					"description": "审核意见",
					"allowEmptyValue": false
				},
				"auditTime": {
					"type": "string",
					"format": "date-time",
					"description": "审核时间",
					"allowEmptyValue": false
				},
				"category": {
					"type": "string",
					"description": "活动类别",
					"allowEmptyValue": false
				},
				"city": {
					"type": "string",
					"description": "活动地点市",
					"allowEmptyValue": false
				},
				"classification": {
					"type": "string",
					"description": "活动分类",
					"allowEmptyValue": false
				},
				"contactMethod": {
					"type": "string",
					"description": "联系方式",
					"allowEmptyValue": false
				},
				"contacts": {
					"type": "string",
					"description": "联系人",
					"allowEmptyValue": false
				},
				"context": {
					"type": "string",
					"description": "活动详情及志愿者招募需求",
					"allowEmptyValue": false
				},
				"county": {
					"type": "string",
					"description": "活动地点区县",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"creatorId": {
					"type": "integer",
					"format": "int64",
					"description": "创建人用户id",
					"allowEmptyValue": false
				},
				"creatorName": {
					"type": "string",
					"description": "创建人名",
					"allowEmptyValue": false
				},
				"demandPeopleNum": {
					"type": "integer",
					"format": "int32",
					"description": "需求人数",
					"allowEmptyValue": false
				},
				"enterPeopleNum": {
					"type": "integer",
					"format": "int32",
					"description": "已报名人数",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"imageUrl": {
					"type": "string",
					"description": "招募图片上传地址",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "活动招募名称",
					"allowEmptyValue": false
				},
				"orgId": {
					"type": "integer",
					"format": "int64",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"orgName": {
					"type": "string",
					"description": "活动部门",
					"allowEmptyValue": false
				},
				"province": {
					"type": "string",
					"description": "活动地点省",
					"allowEmptyValue": false
				},
				"recruitBeginTime": {
					"type": "string",
					"format": "date-time",
					"description": "招募开始时间",
					"allowEmptyValue": false
				},
				"recruitEndTime": {
					"type": "string",
					"format": "date-time",
					"description": "招募结束时间",
					"allowEmptyValue": false
				},
				"recruitType": {
					"type": "string",
					"description": "招募类型",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：待提交，1：待审核，2：已审核，3：已驳回，4：已结束",
					"allowEmptyValue": false
				},
				"streetTown": {
					"type": "string",
					"description": "所属街镇",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "ActivityRecruit对象",
			"description": "活动招募表"
		},
		"ActivityRegistrationQueryParam对象": {
			"type": "object",
			"properties": {
				"activityRecruitId": {
					"type": "integer",
					"format": "int64",
					"description": "关联招募活动id",
					"allowEmptyValue": false
				},
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：待审核，1：录用，2：不录用",
					"allowEmptyValue": false
				}
			},
			"title": "ActivityRegistrationQueryParam对象",
			"description": "活动志愿者报名表查询参数"
		},
		"ActivityRegistration对象": {
			"type": "object",
			"properties": {
				"activityRecruitId": {
					"type": "integer",
					"format": "int64",
					"description": "关联招募活动id",
					"allowEmptyValue": false
				},
				"age": {
					"type": "string",
					"description": "年龄",
					"allowEmptyValue": false
				},
				"applicationTime": {
					"type": "string",
					"format": "date-time",
					"description": "申请时间",
					"allowEmptyValue": false
				},
				"auditId": {
					"type": "integer",
					"format": "int64",
					"description": "审核人id",
					"allowEmptyValue": false
				},
				"auditName": {
					"type": "string",
					"description": "审核人名",
					"allowEmptyValue": false
				},
				"auditOpinion": {
					"type": "string",
					"description": "审核意见",
					"allowEmptyValue": false
				},
				"auditTime": {
					"type": "string",
					"format": "date-time",
					"description": "审核时间",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"creditHours": {
					"type": "number",
					"description": "信用时数",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"idNumber": {
					"type": "string",
					"description": "身份证号",
					"allowEmptyValue": false
				},
				"mobile": {
					"type": "string",
					"description": "手机号",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "志愿者姓名",
					"allowEmptyValue": false
				},
				"participationTime": {
					"type": "string",
					"format": "date-time",
					"description": "参加日期",
					"allowEmptyValue": false
				},
				"politic": {
					"type": "string",
					"description": "政治面貌",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：待审核，1：录用，2：不录用",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "志愿者id",
					"allowEmptyValue": false
				}
			},
			"title": "ActivityRegistration对象",
			"description": "活动志愿者报名表"
		},
		"ActivitySignInDetailQueryParam对象": {
			"type": "object",
			"properties": {
				"activitySignInId": {
					"type": "integer",
					"format": "int64",
					"description": "活动签到id",
					"allowEmptyValue": false
				},
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"idNumber": {
					"type": "string",
					"description": "证件号码",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "姓名",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				}
			},
			"title": "ActivitySignInDetailQueryParam对象",
			"description": "活动签到明细表查询参数"
		},
		"ActivitySignInDetail对象": {
			"type": "object",
			"properties": {
				"activitySignInId": {
					"type": "integer",
					"format": "int64",
					"description": "关联活动签到id",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"idNumber": {
					"type": "string",
					"description": "身份证号",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "姓名",
					"allowEmptyValue": false
				},
				"signInType": {
					"type": "string",
					"description": "签到类型",
					"allowEmptyValue": false
				},
				"type": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：签到,1：签退",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				}
			},
			"title": "ActivitySignInDetail对象",
			"description": "活动签到明细表"
		},
		"ActivitySignInQueryParam对象": {
			"type": "object",
			"properties": {
				"category": {
					"type": "string",
					"description": "活动类别",
					"allowEmptyValue": false
				},
				"city": {
					"type": "string",
					"description": "当前登录人所属市",
					"allowEmptyValue": false
				},
				"code": {
					"type": "string",
					"description": "活动编码",
					"allowEmptyValue": false
				},
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"currentUserOrgId": {
					"type": "string",
					"description": "当前登录人组织id",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "活动名称",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"orgId": {
					"type": "string",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				},
				"status": {
					"type": "string",
					"description": "状态，0：待提交，1：待审核，2：已审核，3：已驳回，4：已结束",
					"allowEmptyValue": false
				},
				"streetTown": {
					"type": "string",
					"description": "所属街镇",
					"allowEmptyValue": false
				}
			},
			"title": "ActivitySignInQueryParam对象",
			"description": "活动签到表查询参数"
		},
		"ActivitySignInSite对象": {
			"type": "object",
			"properties": {
				"activitySignInId": {
					"type": "integer",
					"format": "int64",
					"description": "关联活动签到id",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"latitude": {
					"type": "string",
					"description": "签到地纬度",
					"allowEmptyValue": false
				},
				"longitude": {
					"type": "string",
					"description": "签到地经度",
					"allowEmptyValue": false
				},
				"scope": {
					"type": "string",
					"description": "范围",
					"allowEmptyValue": false
				},
				"siteName": {
					"type": "string",
					"description": "签到地",
					"allowEmptyValue": false
				},
				"type": {
					"type": "integer",
					"format": "int32",
					"description": "类型，0：可签到、签退，1：只签到，2：只签退",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "ActivitySignInSite对象",
			"description": "活动签到地点表"
		},
		"ActivitySignInTodayVo": {
			"type": "object",
			"properties": {
				"activitySignInId": {
					"type": "integer",
					"format": "int64",
					"description": "活动签到id",
					"allowEmptyValue": false
				},
				"idNumber": {
					"type": "string",
					"description": "身份证号",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "姓名",
					"allowEmptyValue": false
				},
				"signInNum": {
					"type": "integer",
					"format": "int32",
					"description": "签到次数",
					"allowEmptyValue": false
				},
				"signOutNum": {
					"type": "integer",
					"format": "int32",
					"description": "签退次数",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "userId",
					"allowEmptyValue": false
				}
			},
			"title": "ActivitySignInTodayVo",
			"description": "ActivitySignInTodayVo"
		},
		"ActivitySignIn对象": {
			"type": "object",
			"properties": {
				"activityRecruitId": {
					"type": "integer",
					"format": "int64",
					"description": "关联招募活动id",
					"allowEmptyValue": false
				},
				"activitySignInSiteList": {
					"type": "array",
					"description": "签到活动地点list",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/ActivitySignInSite对象"
					}
				},
				"address": {
					"type": "string",
					"description": "活动详细地址",
					"allowEmptyValue": false
				},
				"auditId": {
					"type": "integer",
					"format": "int64",
					"description": "审核人id",
					"allowEmptyValue": false
				},
				"auditName": {
					"type": "string",
					"description": "审核人名",
					"allowEmptyValue": false
				},
				"auditOpinion": {
					"type": "string",
					"description": "审核意见",
					"allowEmptyValue": false
				},
				"auditTime": {
					"type": "string",
					"format": "date-time",
					"description": "审核时间",
					"allowEmptyValue": false
				},
				"beginTime": {
					"type": "string",
					"format": "date-time",
					"description": "开始时间",
					"allowEmptyValue": false
				},
				"category": {
					"type": "string",
					"description": "活动类别",
					"allowEmptyValue": false
				},
				"city": {
					"type": "string",
					"description": "活动区域市",
					"allowEmptyValue": false
				},
				"classification": {
					"type": "string",
					"description": "活动分类",
					"allowEmptyValue": false
				},
				"code": {
					"type": "string",
					"description": "活动编码",
					"allowEmptyValue": false
				},
				"contactMethod": {
					"type": "string",
					"description": "联系方式",
					"allowEmptyValue": false
				},
				"contacts": {
					"type": "string",
					"description": "联系人",
					"allowEmptyValue": false
				},
				"context": {
					"type": "string",
					"description": "活动详情及志愿者服务内容",
					"allowEmptyValue": false
				},
				"county": {
					"type": "string",
					"description": "活动区域区县",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"creatorId": {
					"type": "integer",
					"format": "int64",
					"description": "创建人用户id",
					"allowEmptyValue": false
				},
				"creatorName": {
					"type": "string",
					"description": "创建人名",
					"allowEmptyValue": false
				},
				"endTime": {
					"type": "string",
					"format": "date-time",
					"description": "结束时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"imageUrl": {
					"type": "string",
					"description": "图片地址",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "活动名称",
					"allowEmptyValue": false
				},
				"openType": {
					"type": "string",
					"description": "开放类型",
					"allowEmptyValue": false
				},
				"orgId": {
					"type": "integer",
					"format": "int64",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"orgName": {
					"type": "string",
					"description": "所属组织",
					"allowEmptyValue": false
				},
				"province": {
					"type": "string",
					"description": "活动区域省",
					"allowEmptyValue": false
				},
				"remark": {
					"type": "string",
					"description": "备注说明（仅管理员可见、不对外展示）",
					"allowEmptyValue": false
				},
				"signBeginTime": {
					"type": "string",
					"description": "签到开始时间",
					"allowEmptyValue": false
				},
				"signEndTime": {
					"type": "string",
					"description": "签退结束时间",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：待提交，1：待审核，2：已通过，3：已驳回，4：刷卡中，5：已结束",
					"allowEmptyValue": false
				},
				"streetTown": {
					"type": "string",
					"description": "所属街镇",
					"allowEmptyValue": false
				},
				"timingPeriod": {
					"type": "string",
					"description": "定时周期",
					"allowEmptyValue": false
				},
				"timingTime": {
					"type": "string",
					"description": "具体周期时间字符串",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "ActivitySignIn对象",
			"description": "活动签到表"
		},
		"ActivityVo": {
			"type": "object",
			"properties": {
				"activityDataSumVo": {
					"description": "合计",
					"allowEmptyValue": false,
					"$ref": "#/definitions/ActivityDataSumVo"
				},
				"activityDataVoPaging": {
					"description": "分页",
					"allowEmptyValue": false,
					"$ref": "#/definitions/分页«ActivityDataVo»"
				}
			},
			"title": "ActivityVo",
			"description": "活动数据出参"
		},
		"AddAndUpdateByWebAdminPracticeParam": {
			"type": "object",
			"properties": {
				"auditSubordinateService": {
					"type": "integer",
					"format": "int32",
					"description": "是否能审下级服务 0 否 , 1 是",
					"allowEmptyValue": false
				},
				"emailInfo": {
					"type": "string",
					"description": "邮箱",
					"allowEmptyValue": false
				},
				"exemptionService": {
					"type": "integer",
					"format": "int32",
					"description": "是否免审服务 0 否 , 1 是",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"idCard": {
					"type": "string",
					"description": "身份证号",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "姓名",
					"allowEmptyValue": false
				},
				"officePhone": {
					"type": "string",
					"description": "办公电话",
					"allowEmptyValue": false
				},
				"organizations": {
					"type": "array",
					"description": "所在组织",
					"allowEmptyValue": false,
					"items": {
						"type": "integer",
						"format": "int64"
					}
				},
				"password": {
					"type": "string",
					"description": "密码",
					"allowEmptyValue": false
				},
				"phone": {
					"type": "string",
					"description": "手机号",
					"allowEmptyValue": false
				},
				"roles": {
					"type": "array",
					"description": "角色 0 点单站点管理员 , 1 点单维护管理员 , 2 点单组织列表管理员 , 3 点单白名单管理员",
					"allowEmptyValue": false,
					"items": {
						"type": "integer",
						"format": "int32"
					}
				}
			},
			"title": "AddAndUpdateByWebAdminPracticeParam",
			"description": "管理员-实践阵地添加管理员入参"
		},
		"AddAndUpdateByWebParam": {
			"type": "object",
			"properties": {
				"address": {
					"type": "string",
					"description": "地址",
					"allowEmptyValue": false
				},
				"contants": {
					"type": "string",
					"description": "联系人",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"latitude": {
					"type": "string",
					"description": "纬度",
					"allowEmptyValue": false
				},
				"logoUrl": {
					"type": "string",
					"description": "logo链接",
					"allowEmptyValue": false
				},
				"longitude": {
					"type": "string",
					"description": "经度",
					"allowEmptyValue": false
				},
				"phone": {
					"type": "string",
					"description": "电话",
					"allowEmptyValue": false
				},
				"practiceName": {
					"type": "string",
					"description": "实践点名称",
					"allowEmptyValue": false
				},
				"practicePositionDescribe": {
					"type": "string",
					"description": "描述",
					"allowEmptyValue": false
				},
				"sites": {
					"type": "array",
					"description": "上级组织id",
					"allowEmptyValue": false,
					"items": {
						"type": "integer",
						"format": "int64"
					}
				},
				"url": {
					"type": "string",
					"description": "链接",
					"allowEmptyValue": false
				}
			},
			"title": "AddAndUpdateByWebParam",
			"description": "实践阵地添加和修改web入参"
		},
		"AddAndUpdateWebParam": {
			"type": "object",
			"properties": {
				"creator": {
					"type": "string",
					"description": "创建人",
					"allowEmptyValue": false
				},
				"creatorId": {
					"type": "string",
					"description": "创建人Id",
					"allowEmptyValue": false
				},
				"defaultPassword": {
					"type": "string",
					"description": "默认密码 0 出生年月日 , 1 身份证后8位",
					"allowEmptyValue": false
				},
				"email": {
					"type": "string",
					"description": "电子邮箱",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "id",
					"allowEmptyValue": false
				},
				"idCard": {
					"type": "string",
					"description": "身份证号",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "姓名",
					"allowEmptyValue": false
				},
				"officePhone": {
					"type": "string",
					"description": "办公电话",
					"allowEmptyValue": false
				},
				"organizations": {
					"type": "array",
					"description": "所在机构",
					"allowEmptyValue": false,
					"items": {
						"type": "integer",
						"format": "int64"
					}
				},
				"phone": {
					"type": "string",
					"description": "手机号码",
					"allowEmptyValue": false
				},
				"qq": {
					"type": "string",
					"description": "qq",
					"allowEmptyValue": false
				},
				"remarks": {
					"type": "string",
					"description": "备注信息",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态 0 停用 , 1 启用",
					"allowEmptyValue": false
				}
			},
			"title": "AddAndUpdateWebParam",
			"description": "管理员-志愿队伍添加管理员入参"
		},
		"AddByTypeWebParam": {
			"type": "object",
			"properties": {
				"info": {
					"type": "string",
					"description": "导航类型内容, 0 成为志愿者, 1 队伍入驻, 2 志愿队伍, 3 活动报名, 4 活动服务 ,5 点单服务, 6 心愿池, 7 志愿签到, 8 文明瞬间, 9 文明快讯, 10 宣讲课堂， 11 文明榜单， 12 实践排行， 13 实践阵地",
					"allowEmptyValue": false
				},
				"navigationName": {
					"type": "string",
					"description": "导航名称",
					"allowEmptyValue": false
				},
				"navigationType": {
					"type": "string",
					"description": "导航类型, 0 系统功能, 1 url链接",
					"allowEmptyValue": false
				},
				"showName": {
					"type": "string",
					"description": "显示名称",
					"allowEmptyValue": false
				},
				"systemFunction": {
					"type": "integer",
					"format": "int32",
					"description": "系统功能, 0 活动报名 , 1 活动服务, 2 点单服务, 3 文明快讯, 4 宣讲课堂",
					"allowEmptyValue": false
				},
				"type": {
					"type": "integer",
					"format": "int32",
					"description": "类型，1：首页导航，2：快捷入口，3：首页列表",
					"allowEmptyValue": false
				},
				"urlInfo": {
					"type": "string",
					"description": "url链接内容",
					"allowEmptyValue": false
				}
			},
			"title": "AddByTypeWebParam",
			"description": "首页导航、快捷入口 web入参"
		},
		"AddInAppParam": {
			"type": "object",
			"properties": {
				"applyCause": {
					"type": "string",
					"description": "申请原因",
					"allowEmptyValue": false
				},
				"area": {
					"type": "string",
					"description": "区",
					"allowEmptyValue": false
				},
				"auditPerson": {
					"type": "string",
					"description": "申请人",
					"allowEmptyValue": false
				},
				"city": {
					"type": "string",
					"description": "市",
					"allowEmptyValue": false
				},
				"email": {
					"type": "string",
					"description": "邮箱",
					"allowEmptyValue": false
				},
				"idCard": {
					"type": "string",
					"description": "身份证",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "组织名称",
					"allowEmptyValue": false
				},
				"organizationIntroduced": {
					"type": "string",
					"description": "组织介绍",
					"allowEmptyValue": false
				},
				"phone": {
					"type": "string",
					"description": "手机号",
					"allowEmptyValue": false
				},
				"province": {
					"type": "string",
					"description": "省",
					"allowEmptyValue": false
				},
				"register": {
					"type": "integer",
					"format": "int32",
					"description": "民政登记注册,0：否，1：是",
					"allowEmptyValue": false
				},
				"relatedInformation": {
					"type": "string",
					"description": "组织相关资料",
					"allowEmptyValue": false
				},
				"type": {
					"type": "string",
					"description": "组织类型",
					"allowEmptyValue": false
				},
				"userOrganzationId": {
					"type": "integer",
					"format": "int64",
					"description": "用户上级组织id",
					"allowEmptyValue": false
				}
			},
			"title": "AddInAppParam",
			"description": "志愿队伍-队伍入驻添加入参"
		},
		"AddOrUpdateWebParam": {
			"type": "object",
			"properties": {
				"city": {
					"type": "string",
					"description": "市",
					"allowEmptyValue": false
				},
				"county": {
					"type": "string",
					"description": "区",
					"allowEmptyValue": false
				},
				"declaration": {
					"type": "string",
					"description": "公益宣言",
					"allowEmptyValue": false
				},
				"externalTopOrganizationId": {
					"type": "array",
					"description": "外部上级组织id ,只有在添加外部上级组织时使用,已审核通过的组织放在上级组织字段中",
					"allowEmptyValue": false,
					"items": {
						"type": "integer",
						"format": "int64"
					}
				},
				"headUrl": {
					"type": "string",
					"description": "头像url",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "id",
					"allowEmptyValue": false
				},
				"introduction": {
					"type": "string",
					"description": "组织介绍",
					"allowEmptyValue": false
				},
				"isDisplay": {
					"type": "integer",
					"format": "int32",
					"description": "开放展示,0：否，1：是",
					"allowEmptyValue": false
				},
				"isRecruiting": {
					"type": "integer",
					"format": "int32",
					"description": "开放招募，0：否，1：是",
					"allowEmptyValue": false
				},
				"latitude": {
					"type": "string",
					"description": "维度",
					"allowEmptyValue": false
				},
				"longitude": {
					"type": "string",
					"description": "精度",
					"allowEmptyValue": false
				},
				"orderNo": {
					"type": "string",
					"description": "排序号",
					"allowEmptyValue": false
				},
				"organizationAddress": {
					"type": "string",
					"description": "组织定位地址",
					"allowEmptyValue": false
				},
				"organizationDetailAddress": {
					"type": "string",
					"description": "组织详细地址",
					"allowEmptyValue": false
				},
				"organizationName": {
					"type": "string",
					"description": "组织名称",
					"allowEmptyValue": false
				},
				"province": {
					"type": "string",
					"description": "省",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "登记状态,0：未在民政部门登记，1：民政部门登记",
					"allowEmptyValue": false
				},
				"topOrganizations": {
					"type": "array",
					"description": "上级组织",
					"allowEmptyValue": false,
					"items": {
						"type": "string"
					}
				},
				"type": {
					"type": "string",
					"description": "组织类型",
					"allowEmptyValue": false
				}
			},
			"title": "AddOrUpdateWebParam",
			"description": "志愿队伍-队伍管理入参"
		},
		"AdminRoleInfoQueryParam对象": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				}
			},
			"title": "AdminRoleInfoQueryParam对象",
			"description": "WEB用户角色表查询参数"
		},
		"AdminRoleInfo对象": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"roleId": {
					"type": "integer",
					"format": "int32",
					"description": "角色，1；文明实践中心管理员，2：志愿服务队伍管理员",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				}
			},
			"title": "AdminRoleInfo对象",
			"description": "WEB用户角色表"
		},
		"ApplyOrgWebParam": {
			"type": "object",
			"properties": {
				"orgId": {
					"type": "integer",
					"format": "int64",
					"description": "当前队伍id",
					"allowEmptyValue": false
				},
				"topOrgIds": {
					"type": "array",
					"description": "添加的上级id",
					"allowEmptyValue": false,
					"items": {
						"type": "integer",
						"format": "int64"
					}
				}
			},
			"title": "ApplyOrgWebParam",
			"description": "web申请上级组织入参"
		},
		"CivilizationClassWebUpdateParam": {
			"type": "object",
			"properties": {
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "id",
					"allowEmptyValue": false
				},
				"isEnable": {
					"type": "integer",
					"format": "int32",
					"description": "关闭、开启",
					"allowEmptyValue": false
				}
			},
			"title": "CivilizationClassWebUpdateParam",
			"description": "文明课堂web修改参数"
		},
		"CivilizationClass对象": {
			"type": "object",
			"properties": {
				"classType": {
					"type": "integer",
					"format": "int32",
					"description": "课堂类型，1：图文类型，2：视频课堂",
					"allowEmptyValue": false
				},
				"context": {
					"type": "string",
					"description": "课堂内容",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"imageUrl": {
					"type": "string",
					"description": "封面url地址",
					"allowEmptyValue": false
				},
				"isEnable": {
					"type": "integer",
					"format": "int32",
					"description": "是否启用，0：禁用，1：启用",
					"allowEmptyValue": false
				},
				"manuscriptType": {
					"type": "integer",
					"format": "int32",
					"description": "稿件类型，1：原创稿件，2：外链稿件",
					"allowEmptyValue": false
				},
				"selectColumn": {
					"type": "integer",
					"format": "int64",
					"description": "选择栏目id",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：未发布，1：已发布",
					"allowEmptyValue": false
				},
				"title": {
					"type": "string",
					"description": "标题",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"urlAddress": {
					"type": "string",
					"description": "链接地址",
					"allowEmptyValue": false
				}
			},
			"title": "CivilizationClass对象",
			"description": "文明课堂表"
		},
		"CivilizationListAddRefereesWebParam": {
			"type": "object",
			"properties": {
				"info": {
					"type": "string",
					"description": "事迹详情",
					"allowEmptyValue": false
				},
				"personName": {
					"type": "string",
					"description": "好人姓名",
					"allowEmptyValue": false
				},
				"phone": {
					"type": "string",
					"description": "手机",
					"allowEmptyValue": false
				},
				"referees": {
					"type": "string",
					"description": "推荐人",
					"allowEmptyValue": false
				}
			},
			"title": "CivilizationListAddRefereesWebParam",
			"description": "我要推荐App参数"
		},
		"CivilizationListAddWebParam": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"detailIntroduction": {
					"type": "string",
					"description": "详情介绍",
					"allowEmptyValue": false
				},
				"introduction": {
					"type": "string",
					"description": "简介",
					"allowEmptyValue": false
				},
				"listId": {
					"type": "integer",
					"format": "int64",
					"description": "榜单id",
					"allowEmptyValue": false
				},
				"listType": {
					"type": "integer",
					"format": "int32",
					"description": "榜单类型，1：个人榜单，2：组织榜单",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "名称",
					"allowEmptyValue": false
				},
				"organizationId": {
					"type": "integer",
					"format": "int64",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态,0：禁用，1：启用",
					"allowEmptyValue": false
				},
				"typeId": {
					"type": "integer",
					"format": "int64",
					"description": "类型id",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"urlAddress": {
					"type": "string",
					"description": "首图url",
					"allowEmptyValue": false
				},
				"urlList": {
					"type": "array",
					"description": "事迹图片url列表",
					"allowEmptyValue": false,
					"items": {
						"type": "string"
					}
				}
			},
			"title": "CivilizationListAddWebParam",
			"description": "文明榜单web保存参数"
		},
		"CivilizationListDeleteWebParam": {
			"type": "object",
			"properties": {
				"ids": {
					"type": "array",
					"description": "id列表",
					"allowEmptyValue": false,
					"items": {
						"type": "integer",
						"format": "int64"
					}
				}
			},
			"title": "CivilizationListDeleteWebParam",
			"description": "文明榜单web批量删除参数"
		},
		"CivilizationListQueryAppParam": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"listId": {
					"type": "integer",
					"format": "int64",
					"description": "榜单id",
					"allowEmptyValue": false
				},
				"queryEndDate": {
					"type": "string",
					"format": "date-time",
					"description": "查询结束时间",
					"allowEmptyValue": false
				},
				"queryStartDate": {
					"type": "string",
					"format": "date-time",
					"description": "查询开始时间",
					"allowEmptyValue": false
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				}
			},
			"title": "CivilizationListQueryAppParam",
			"description": "文明榜单App查询参数"
		},
		"CivilizationListQueryWebParam": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"listId": {
					"type": "integer",
					"format": "int64",
					"description": "榜单id",
					"allowEmptyValue": false
				},
				"listType": {
					"type": "integer",
					"format": "int32",
					"description": "榜单类型，1：个人，2：组织",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "名称",
					"allowEmptyValue": false
				},
				"queryEndDate": {
					"type": "string",
					"format": "date-time",
					"description": "查询结束时间",
					"allowEmptyValue": false
				},
				"queryStartDate": {
					"type": "string",
					"format": "date-time",
					"description": "查询开始时间",
					"allowEmptyValue": false
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态",
					"allowEmptyValue": false
				},
				"typeId": {
					"type": "integer",
					"format": "int64",
					"description": "类型id",
					"allowEmptyValue": false
				}
			},
			"title": "CivilizationListQueryWebParam",
			"description": "文明榜单web查询参数"
		},
		"CivilizationListUpdateWebParam": {
			"type": "object",
			"properties": {
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "id",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态",
					"allowEmptyValue": false
				}
			},
			"title": "CivilizationListUpdateWebParam",
			"description": "文明榜单web修改参数"
		},
		"CivilizationListUrlWebVo": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"detailIntroduction": {
					"type": "string",
					"description": "详情介绍",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"introduction": {
					"type": "string",
					"description": "简介",
					"allowEmptyValue": false
				},
				"listId": {
					"type": "integer",
					"format": "int64",
					"description": "榜单id",
					"allowEmptyValue": false
				},
				"listType": {
					"type": "integer",
					"format": "int32",
					"description": "榜单类型，1：个人榜单，2：组织榜单",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "名称",
					"allowEmptyValue": false
				},
				"organizationId": {
					"type": "integer",
					"format": "int64",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态,0：禁用，1：启用",
					"allowEmptyValue": false
				},
				"typeId": {
					"type": "integer",
					"format": "int64",
					"description": "类型id",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"urlAddress": {
					"type": "string",
					"description": "首图url",
					"allowEmptyValue": false
				},
				"urlList": {
					"type": "array",
					"description": "事迹图片url列表",
					"allowEmptyValue": false,
					"items": {
						"type": "string"
					}
				}
			},
			"title": "CivilizationListUrlWebVo",
			"description": "文明榜单详情webVo"
		},
		"CivilizationList对象": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"detailIntroduction": {
					"type": "string",
					"description": "详情介绍",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"introduction": {
					"type": "string",
					"description": "简介",
					"allowEmptyValue": false
				},
				"listId": {
					"type": "integer",
					"format": "int64",
					"description": "榜单id",
					"allowEmptyValue": false
				},
				"listType": {
					"type": "integer",
					"format": "int32",
					"description": "榜单类型，1：个人榜单，2：组织榜单",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "名称",
					"allowEmptyValue": false
				},
				"organizationId": {
					"type": "integer",
					"format": "int64",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"phone": {
					"type": "string",
					"description": "手机号码",
					"allowEmptyValue": false
				},
				"referees": {
					"type": "string",
					"description": "推荐人姓名",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态,0：禁用，1：启用",
					"allowEmptyValue": false
				},
				"typeId": {
					"type": "integer",
					"format": "int64",
					"description": "类型id",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"urlAddress": {
					"type": "string",
					"description": "首图url",
					"allowEmptyValue": false
				},
				"urlList": {
					"type": "string",
					"description": "事迹图片url列表",
					"allowEmptyValue": false
				}
			},
			"title": "CivilizationList对象",
			"description": "文明榜单表"
		},
		"CivilizationMomentQueryWebParam": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"queryEndDate": {
					"type": "string",
					"format": "date-time",
					"description": "查询结束时间",
					"allowEmptyValue": false
				},
				"queryStartDate": {
					"type": "string",
					"format": "date-time",
					"description": "查询开始时间",
					"allowEmptyValue": false
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				}
			},
			"title": "CivilizationMomentQueryWebParam",
			"description": "文明瞬间web查询参数"
		},
		"CivilizationMomentUpdateWebAddParam": {
			"type": "object",
			"properties": {
				"account": {
					"type": "string",
					"description": "用户账户",
					"allowEmptyValue": false
				},
				"context": {
					"type": "string",
					"description": "文案",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"imageUrls": {
					"type": "array",
					"description": "图片地址列表",
					"allowEmptyValue": false,
					"items": {
						"type": "string"
					}
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：关闭，1：启用",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"url": {
					"type": "string",
					"description": "用户头像",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				}
			},
			"title": "CivilizationMomentUpdateWebAddParam",
			"description": "文明瞬间添加参数"
		},
		"CivilizationMomentUpdateWebStatusParam": {
			"type": "object",
			"properties": {
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "id",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：关闭，1：启用",
					"allowEmptyValue": false
				}
			},
			"title": "CivilizationMomentUpdateWebStatusParam",
			"description": "文明瞬间web修改状态参数"
		},
		"CivilizationWebQueryParam": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"queryEndDate": {
					"type": "string",
					"format": "date-time",
					"description": "查询结束时间",
					"allowEmptyValue": false
				},
				"queryStartDate": {
					"type": "string",
					"format": "date-time",
					"description": "查询开始时间",
					"allowEmptyValue": false
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态",
					"allowEmptyValue": false
				},
				"title": {
					"type": "string",
					"description": "标题",
					"allowEmptyValue": false
				},
				"typeConfigurationId": {
					"type": "integer",
					"format": "int64",
					"description": "栏目id",
					"allowEmptyValue": false
				}
			},
			"title": "CivilizationWebQueryParam",
			"description": "文明课堂web查询参数"
		},
		"CluesQueryParam对象": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				}
			},
			"title": "CluesQueryParam对象",
			"description": "收到线索表查询参数"
		},
		"CluesWebDeleteParam": {
			"type": "object",
			"properties": {
				"ids": {
					"type": "array",
					"description": "id列表",
					"allowEmptyValue": false,
					"items": {
						"type": "integer",
						"format": "int64"
					}
				}
			},
			"title": "CluesWebDeleteParam",
			"description": "线索web删除参数"
		},
		"CluesWebQueryParam": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "名称",
					"allowEmptyValue": false
				},
				"queryEndDate": {
					"type": "string",
					"format": "date-time",
					"description": "查询结束时间",
					"allowEmptyValue": false
				},
				"queryStartDate": {
					"type": "string",
					"format": "date-time",
					"description": "查询开始时间",
					"allowEmptyValue": false
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：关闭，1：开启",
					"allowEmptyValue": false
				}
			},
			"title": "CluesWebQueryParam",
			"description": "线索web查询参数"
		},
		"Clues对象": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "姓名",
					"allowEmptyValue": false
				},
				"phone": {
					"type": "string",
					"description": "手机号码",
					"allowEmptyValue": false
				},
				"referees": {
					"type": "string",
					"description": "推荐人",
					"allowEmptyValue": false
				},
				"storyDetail": {
					"type": "string",
					"description": "事迹详情",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "Clues对象",
			"description": "收到线索表"
		},
		"ConsultingReleaseWebLikeParam": {
			"type": "object",
			"properties": {
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "内容id",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				}
			},
			"title": "ConsultingReleaseWebLikeParam",
			"description": "文明瞬间web点赞参数"
		},
		"ConsultingReleaseWebQueryParam": {
			"type": "object",
			"properties": {
				"beginTime": {
					"type": "string",
					"format": "date-time",
					"description": "开始时间",
					"allowEmptyValue": false
				},
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"endTime": {
					"type": "string",
					"format": "date-time",
					"description": "结束时间",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"monthTime": {
					"type": "string",
					"format": "date-time",
					"description": "一月前时间",
					"allowEmptyValue": false
				},
				"nowTime": {
					"type": "string",
					"format": "date-time",
					"description": "当前时间",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"orgId": {
					"type": "integer",
					"format": "int64",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"orgName": {
					"type": "string",
					"description": "组织名称",
					"allowEmptyValue": false
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				},
				"type": {
					"type": "string",
					"description": "活动类别",
					"allowEmptyValue": false
				},
				"yearTime": {
					"type": "string",
					"format": "date-time",
					"description": "一年前时间",
					"allowEmptyValue": false
				}
			},
			"title": "ConsultingReleaseWebQueryParam",
			"description": "文明瞬间web查询参数"
		},
		"ConsultingReleaseWebUpdateParam": {
			"type": "object",
			"properties": {
				"associatedActivity": {
					"type": "integer",
					"format": "int64",
					"description": "关联活动id",
					"allowEmptyValue": false
				},
				"associatedPosition": {
					"type": "integer",
					"format": "int64",
					"description": "关联阵地id",
					"allowEmptyValue": false
				},
				"associatedService": {
					"type": "integer",
					"format": "int64",
					"description": "关联服务id",
					"allowEmptyValue": false
				},
				"associatedTeam": {
					"type": "integer",
					"format": "int64",
					"description": "关联队伍id",
					"allowEmptyValue": false
				},
				"author": {
					"type": "string",
					"description": "作者",
					"allowEmptyValue": false
				},
				"context": {
					"type": "string",
					"description": "资讯内容",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"creatorId": {
					"type": "integer",
					"format": "int64",
					"description": "创建人id",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"imageUrl": {
					"type": "string",
					"description": "封面url地址",
					"allowEmptyValue": false
				},
				"isEnable": {
					"type": "integer",
					"format": "int32",
					"description": "是否启用，0：禁用，1：启用",
					"allowEmptyValue": false
				},
				"manuscriptType": {
					"type": "integer",
					"format": "int32",
					"description": "稿件类型，1：原创稿件，2：外链稿件",
					"allowEmptyValue": false
				},
				"organizationId": {
					"type": "integer",
					"format": "int64",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"selectColumn": {
					"type": "integer",
					"format": "int64",
					"description": "选择栏目id",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：未发布，1：已发布",
					"allowEmptyValue": false
				},
				"title": {
					"type": "string",
					"description": "标题",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"urlAddress": {
					"type": "string",
					"description": "链接地址",
					"allowEmptyValue": false
				}
			},
			"title": "ConsultingReleaseWebUpdateParam",
			"description": "文明瞬间web修改参数"
		},
		"ConsultingRelease对象": {
			"type": "object",
			"properties": {
				"associatedActivity": {
					"type": "integer",
					"format": "int64",
					"description": "关联活动id",
					"allowEmptyValue": false
				},
				"associatedPosition": {
					"type": "integer",
					"format": "int64",
					"description": "关联阵地id",
					"allowEmptyValue": false
				},
				"associatedService": {
					"type": "integer",
					"format": "int64",
					"description": "关联服务id",
					"allowEmptyValue": false
				},
				"associatedTeam": {
					"type": "integer",
					"format": "int64",
					"description": "关联队伍id",
					"allowEmptyValue": false
				},
				"author": {
					"type": "string",
					"description": "作者",
					"allowEmptyValue": false
				},
				"context": {
					"type": "string",
					"description": "资讯内容",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"imageUrl": {
					"type": "string",
					"description": "封面url地址",
					"allowEmptyValue": false
				},
				"isEnable": {
					"type": "integer",
					"format": "int32",
					"description": "是否启用，0：禁用，1：启用",
					"allowEmptyValue": false
				},
				"manuscriptType": {
					"type": "integer",
					"format": "int32",
					"description": "稿件类型，1：原创稿件，2：外链稿件",
					"allowEmptyValue": false
				},
				"organizationId": {
					"type": "integer",
					"format": "int64",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"selectColumn": {
					"type": "integer",
					"format": "int64",
					"description": "选择栏目id",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：未发布，1：已发布",
					"allowEmptyValue": false
				},
				"title": {
					"type": "string",
					"description": "标题",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"urlAddress": {
					"type": "string",
					"description": "链接地址",
					"allowEmptyValue": false
				}
			},
			"title": "ConsultingRelease对象",
			"description": "资讯发布表"
		},
		"CoreDataVo": {
			"type": "object",
			"properties": {
				"activityNum": {
					"type": "integer",
					"format": "int32",
					"description": "累计开展活动数量",
					"allowEmptyValue": false
				},
				"finishOrderNum": {
					"type": "integer",
					"format": "int32",
					"description": "已完成点单服务人次",
					"allowEmptyValue": false
				},
				"onlineNum": {
					"type": "integer",
					"format": "int32",
					"description": "实时在岗人数",
					"allowEmptyValue": false
				},
				"orderNum": {
					"type": "integer",
					"format": "int32",
					"description": "群众点单人次",
					"allowEmptyValue": false
				},
				"orgNum": {
					"type": "integer",
					"format": "int32",
					"description": "组织总数",
					"allowEmptyValue": false
				},
				"signInNum": {
					"type": "integer",
					"format": "int32",
					"description": "今日实时签到人数",
					"allowEmptyValue": false
				},
				"volNum": {
					"type": "integer",
					"format": "int32",
					"description": "志愿者注册数量",
					"allowEmptyValue": false
				}
			},
			"title": "CoreDataVo",
			"description": "数据大屏中央数据出参"
		},
		"CreditHoursDataQueryParam对象": {
			"type": "object",
			"properties": {
				"activityName": {
					"type": "string",
					"description": "活动名称",
					"allowEmptyValue": false
				},
				"activitySignInId": {
					"type": "integer",
					"format": "int64",
					"description": "关联活动签到id",
					"allowEmptyValue": false
				},
				"beginTime": {
					"type": "string",
					"format": "date-time",
					"description": "开始时间",
					"allowEmptyValue": false
				},
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"endTime": {
					"type": "string",
					"format": "date-time",
					"description": "结束时间",
					"allowEmptyValue": false
				},
				"idNumber": {
					"type": "string",
					"description": "身份证号",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "姓名",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：待审核，1：已通过，2：已驳回",
					"allowEmptyValue": false
				},
				"type": {
					"type": "string",
					"description": "签到类型",
					"allowEmptyValue": false
				}
			},
			"title": "CreditHoursDataQueryParam对象",
			"description": "信用时数数据表查询参数"
		},
		"CreditHoursData对象": {
			"type": "object",
			"properties": {
				"activityName": {
					"type": "string",
					"description": "活动名称",
					"allowEmptyValue": false
				},
				"activitySignInId": {
					"type": "integer",
					"format": "int64",
					"description": "关联活动签到id",
					"allowEmptyValue": false
				},
				"auditId": {
					"type": "integer",
					"format": "int64",
					"description": "审核人id",
					"allowEmptyValue": false
				},
				"auditName": {
					"type": "string",
					"description": "审核人名",
					"allowEmptyValue": false
				},
				"auditOpinion": {
					"type": "string",
					"description": "审核意见",
					"allowEmptyValue": false
				},
				"auditTime": {
					"type": "string",
					"format": "date-time",
					"description": "审核时间",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"creditHours": {
					"type": "number",
					"format": "double",
					"description": "信用时数",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"idNumber": {
					"type": "string",
					"description": "身份证号",
					"allowEmptyValue": false
				},
				"mobile": {
					"type": "string",
					"description": "手机号",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "姓名",
					"allowEmptyValue": false
				},
				"no": {
					"type": "string",
					"description": "志愿者编号",
					"allowEmptyValue": false
				},
				"signInTime": {
					"type": "string",
					"format": "date-time",
					"description": "签到时间",
					"allowEmptyValue": false
				},
				"signOutTime": {
					"type": "string",
					"format": "date-time",
					"description": "签退时间",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：待审核，1：已通过，2：已驳回",
					"allowEmptyValue": false
				},
				"type": {
					"type": "string",
					"description": "签到类型",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				}
			},
			"title": "CreditHoursData对象",
			"description": "信用时数数据表"
		},
		"CurrencyAreas对象": {
			"type": "object",
			"properties": {
				"area": {
					"type": "string",
					"description": "区级名字",
					"allowEmptyValue": false
				},
				"areaId": {
					"type": "string",
					"description": "区级id",
					"allowEmptyValue": false
				},
				"cityId": {
					"type": "string",
					"description": "市级id",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "CurrencyAreas对象",
			"description": "通用区级表"
		},
		"CurrencyCities对象": {
			"type": "object",
			"properties": {
				"city": {
					"type": "string",
					"description": "市级名字",
					"allowEmptyValue": false
				},
				"cityId": {
					"type": "string",
					"description": "市级id",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"provinceId": {
					"type": "string",
					"description": "省级id",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "CurrencyCities对象",
			"description": "通市级表"
		},
		"CurrencyProvinces对象": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"province": {
					"type": "string",
					"description": "省级名字",
					"allowEmptyValue": false
				},
				"provinceId": {
					"type": "string",
					"description": "省级id",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "CurrencyProvinces对象",
			"description": "通用省级表"
		},
		"DeleteBatchWebParam": {
			"type": "object",
			"properties": {
				"ids": {
					"type": "array",
					"description": "id列表",
					"allowEmptyValue": false,
					"items": {
						"type": "integer",
						"format": "int64"
					}
				}
			},
			"title": "DeleteBatchWebParam",
			"description": "志愿队伍批量删除入参"
		},
		"DeleteIds": {
			"type": "object",
			"properties": {
				"deleteIds": {
					"type": "array",
					"description": "组织id",
					"allowEmptyValue": false,
					"items": {
						"type": "integer",
						"format": "int64"
					}
				}
			},
			"title": "DeleteIds",
			"description": "删除记录ids"
		},
		"FabulousQueryParam对象": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				}
			},
			"title": "FabulousQueryParam对象",
			"description": "点赞表查询参数"
		},
		"Fabulous对象": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"likeId": {
					"type": "integer",
					"format": "int64",
					"description": "点赞id",
					"allowEmptyValue": false
				},
				"type": {
					"type": "integer",
					"format": "int32",
					"description": "点赞类型 1 文明瞬间,2 活动签到,3 活动招募,4 心愿池",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				}
			},
			"title": "Fabulous对象",
			"description": "点赞表"
		},
		"HomeBannerUpdateWebStatusParam": {
			"type": "object",
			"properties": {
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "id",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态",
					"allowEmptyValue": false
				}
			},
			"title": "HomeBannerUpdateWebStatusParam",
			"description": "首页轮播图 web修改参数"
		},
		"HomeBannerWebUpdateParam": {
			"type": "object",
			"properties": {
				"ids": {
					"type": "array",
					"description": "id列表",
					"allowEmptyValue": false,
					"items": {
						"type": "integer",
						"format": "int64"
					}
				}
			},
			"title": "HomeBannerWebUpdateParam",
			"description": "首页导航上下移动 web修改参数"
		},
		"HomeBanner对象": {
			"type": "object",
			"properties": {
				"content": {
					"type": "string",
					"description": "内容",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"imageName": {
					"type": "string",
					"description": "图片名称",
					"allowEmptyValue": false
				},
				"imageUrl": {
					"type": "string",
					"description": "图片url",
					"allowEmptyValue": false
				},
				"num": {
					"type": "integer",
					"format": "int32",
					"description": "顺序",
					"allowEmptyValue": false
				},
				"relatedContent": {
					"type": "string",
					"description": "关联内容 0 不关联,1 文明快讯,2 外联",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "启动状态 0 未启动 , 1 已启动",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "HomeBanner对象",
			"description": "首页轮播图"
		},
		"HomeConfiguration对象": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"homeName": {
					"type": "string",
					"description": "首页名称",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "HomeConfiguration对象",
			"description": "首页配置"
		},
		"HomeNavigationQueryParam对象": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				}
			},
			"title": "HomeNavigationQueryParam对象",
			"description": "首页导航、快捷入口、列表配置表查询参数"
		},
		"HomeNavigationUpdateWebStatusParam": {
			"type": "object",
			"properties": {
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "id",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态",
					"allowEmptyValue": false
				}
			},
			"title": "HomeNavigationUpdateWebStatusParam",
			"description": "首页导航、快捷入口、列表配置 web修改参数"
		},
		"HomeNavigationWebUpdateParam": {
			"type": "object",
			"properties": {
				"ids": {
					"type": "array",
					"description": "id列表",
					"allowEmptyValue": false,
					"items": {
						"type": "integer",
						"format": "int64"
					}
				}
			},
			"title": "HomeNavigationWebUpdateParam",
			"description": "首页导航、快捷入口、列表配置导航上下移动 web修改参数"
		},
		"HomeNavigation对象": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"info": {
					"type": "string",
					"description": "导航类型内容, 0 成为志愿者, 1 队伍入驻, 2 志愿队伍, 3 活动报名, 4 活动服务 ,5 点单服务, 6 心愿池, 7 志愿签到, 8 文明瞬间, 9 文明快讯, 10 宣讲课堂， 11 文明榜单， 12 实践排行， 13 实践阵地",
					"allowEmptyValue": false
				},
				"navigationName": {
					"type": "string",
					"description": "导航名称",
					"allowEmptyValue": false
				},
				"navigationType": {
					"type": "string",
					"description": "导航类型, 0 系统功能, 1 url链接",
					"allowEmptyValue": false
				},
				"num": {
					"type": "integer",
					"format": "int32",
					"description": "顺序",
					"allowEmptyValue": false
				},
				"showName": {
					"type": "string",
					"description": "显示名称",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "启动状态 0 未启动 , 1 已启动",
					"allowEmptyValue": false
				},
				"systemFunction": {
					"type": "integer",
					"format": "int32",
					"description": "系统功能, 0 活动报名 , 1 活动服务, 2 点单服务, 3 文明快讯, 4 宣讲课堂",
					"allowEmptyValue": false
				},
				"type": {
					"type": "integer",
					"format": "int32",
					"description": "类型，1：首页导航，2：快捷入口，3：列表配置",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"urlInfo": {
					"type": "string",
					"description": "url链接内容",
					"allowEmptyValue": false
				}
			},
			"title": "HomeNavigation对象",
			"description": "首页导航、快捷入口、列表配置表"
		},
		"JoinOrganizationAppParam": {
			"type": "object",
			"properties": {
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"operation": {
					"type": "integer",
					"format": "int32",
					"description": "操作  0 取消加入 , 1 立即加入",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "当前用户id",
					"allowEmptyValue": false
				}
			},
			"title": "JoinOrganizationAppParam",
			"description": "志愿队伍-队伍管理加入组织入参"
		},
		"Likes对象": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"dataId": {
					"type": "integer",
					"format": "int64",
					"description": "数据id",
					"allowEmptyValue": false
				},
				"dataType": {
					"type": "integer",
					"format": "int32",
					"description": "表类型，0：心愿，1：招募活动，2：签到活动",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				}
			},
			"title": "Likes对象",
			"description": "点赞表"
		},
		"ListConfiguration对象": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"listName": {
					"type": "string",
					"description": "榜单名称",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "ListConfiguration对象",
			"description": "榜单配置"
		},
		"ListType对象": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"listId": {
					"type": "integer",
					"format": "int64",
					"description": "榜单id",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态",
					"allowEmptyValue": false
				},
				"typeName": {
					"type": "string",
					"description": "类型名称",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "ListType对象",
			"description": "榜单类型"
		},
		"OrderFeedbackAppParam": {
			"type": "object",
			"properties": {
				"feedback": {
					"type": "string",
					"description": "反馈",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "id",
					"allowEmptyValue": false
				},
				"mobile": {
					"type": "string",
					"description": "服务者电话",
					"allowEmptyValue": false
				},
				"serviceIdNumber": {
					"type": "string",
					"description": "服务者身份证号",
					"allowEmptyValue": false
				},
				"serviceName": {
					"type": "string",
					"description": "服务者姓名",
					"allowEmptyValue": false
				},
				"star": {
					"type": "number",
					"format": "double",
					"description": "星级",
					"allowEmptyValue": false
				}
			},
			"title": "OrderFeedbackAppParam",
			"description": "app端查评价订单param"
		},
		"OrderItem": {
			"type": "object",
			"properties": {
				"asc": {
					"type": "boolean"
				},
				"column": {
					"type": "string"
				}
			},
			"title": "OrderItem"
		},
		"OrderManageEvaluateQueryParam对象": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"orderManageId": {
					"type": "integer",
					"format": "int64",
					"description": "点单服务id",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				}
			},
			"title": "OrderManageEvaluateQueryParam对象",
			"description": "查询参数"
		},
		"OrderManageEvaluate对象": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "评价时间",
					"allowEmptyValue": false
				},
				"feedback": {
					"type": "string",
					"description": "反馈",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"orderManageId": {
					"type": "integer",
					"format": "int64",
					"description": "点单服务id",
					"allowEmptyValue": false
				},
				"serviceIdNumber": {
					"type": "string",
					"description": "服务者证件号",
					"allowEmptyValue": false
				},
				"serviceMobile": {
					"type": "string",
					"description": "服务者手机号",
					"allowEmptyValue": false
				},
				"serviceName": {
					"type": "string",
					"description": "服务者姓名",
					"allowEmptyValue": false
				},
				"star": {
					"type": "number",
					"description": "评价星级",
					"allowEmptyValue": false
				},
				"tenentId": {
					"type": "integer",
					"format": "int32",
					"description": "租户id",
					"allowEmptyValue": false
				}
			},
			"title": "OrderManageEvaluate对象"
		},
		"OrderManageQueryParam对象": {
			"type": "object",
			"properties": {
				"beginTime": {
					"type": "string",
					"format": "date-time",
					"description": "开始时间",
					"allowEmptyValue": false
				},
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"endTime": {
					"type": "string",
					"format": "date-time",
					"description": "结束时间",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"orgId": {
					"type": "integer",
					"format": "int64",
					"description": "服务组织id",
					"allowEmptyValue": false
				},
				"serviceType": {
					"type": "string",
					"description": "服务类型",
					"allowEmptyValue": false
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：待审核，1：已审核，2：已驳回，3：未服务，4：已服务，5：已评价，6：已反馈，7：已取消， 8：已接单，9：已退单",
					"allowEmptyValue": false
				},
				"title": {
					"type": "string",
					"description": "标题",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				}
			},
			"title": "OrderManageQueryParam对象",
			"description": "点单管理表查询参数"
		},
		"OrderManage对象": {
			"type": "object",
			"properties": {
				"address": {
					"type": "string",
					"description": "服务地点",
					"allowEmptyValue": false
				},
				"auditId": {
					"type": "integer",
					"format": "int64",
					"description": "审核人id",
					"allowEmptyValue": false
				},
				"auditName": {
					"type": "string",
					"description": "审核人名",
					"allowEmptyValue": false
				},
				"auditOpinion": {
					"type": "string",
					"description": "审核意见",
					"allowEmptyValue": false
				},
				"auditTime": {
					"type": "string",
					"format": "date-time",
					"description": "审核时间",
					"allowEmptyValue": false
				},
				"beginTime": {
					"type": "string",
					"format": "date-time",
					"description": "期望服务开始时间",
					"allowEmptyValue": false
				},
				"city": {
					"type": "string",
					"description": "可服务区域市",
					"allowEmptyValue": false
				},
				"clickNumber": {
					"type": "integer",
					"format": "int32",
					"description": "可点次数",
					"allowEmptyValue": false
				},
				"county": {
					"type": "string",
					"description": "可服务区域区县",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "发布时间",
					"allowEmptyValue": false
				},
				"demandServiceMethod": {
					"type": "string",
					"description": "需求者服务方式",
					"allowEmptyValue": false
				},
				"demandServicePlace": {
					"type": "string",
					"description": "需求者期望服务地点",
					"allowEmptyValue": false
				},
				"demandServiceTime": {
					"type": "string",
					"description": "需求者期望服务时间",
					"allowEmptyValue": false
				},
				"description": {
					"type": "string",
					"description": "介绍",
					"allowEmptyValue": false
				},
				"endTime": {
					"type": "string",
					"format": "date-time",
					"description": "期望服务结束时间",
					"allowEmptyValue": false
				},
				"feedback": {
					"type": "string",
					"description": "反馈",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"imageUrl": {
					"type": "string",
					"description": "图片地址",
					"allowEmptyValue": false
				},
				"mobile": {
					"type": "string",
					"description": "需求者机号",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "需求者姓名",
					"allowEmptyValue": false
				},
				"orgId": {
					"type": "integer",
					"format": "int64",
					"description": "服务组织id",
					"allowEmptyValue": false
				},
				"orgName": {
					"type": "string",
					"description": "服务组织",
					"allowEmptyValue": false
				},
				"province": {
					"type": "string",
					"description": "可服务区域省",
					"allowEmptyValue": false
				},
				"serviceBeginTime": {
					"type": "string",
					"format": "date-time",
					"description": "服务开始时间",
					"allowEmptyValue": false
				},
				"serviceEndTime": {
					"type": "string",
					"format": "date-time",
					"description": "服务结束时间",
					"allowEmptyValue": false
				},
				"serviceId": {
					"type": "integer",
					"format": "int64",
					"description": "服务管理表id",
					"allowEmptyValue": false
				},
				"serviceIdNumber": {
					"type": "string",
					"description": "服务者证件号",
					"allowEmptyValue": false
				},
				"serviceMobile": {
					"type": "string",
					"description": "服务者手机号",
					"allowEmptyValue": false
				},
				"serviceName": {
					"type": "string",
					"description": "服务者姓名",
					"allowEmptyValue": false
				},
				"serviceTime": {
					"type": "string",
					"format": "date-time",
					"description": "具体服务时间",
					"allowEmptyValue": false
				},
				"serviceType": {
					"type": "string",
					"description": "服务类型",
					"allowEmptyValue": false
				},
				"star": {
					"type": "number",
					"format": "double",
					"description": "评价星级",
					"allowEmptyValue": false
				},
				"starNum": {
					"type": "integer",
					"format": "int32",
					"description": "评价次数",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：待审核，1：已审核，2：已驳回，3：未服务，4：已服务，5：已评价，6：已反馈，7：已取消， 8：已接单，9：已退单",
					"allowEmptyValue": false
				},
				"street": {
					"type": "string",
					"description": "可服务区域街道",
					"allowEmptyValue": false
				},
				"tenentId": {
					"type": "integer",
					"format": "int32",
					"description": "租户id",
					"allowEmptyValue": false
				},
				"title": {
					"type": "string",
					"description": "标题",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				},
				"volunteerIds": {
					"type": "string",
					"description": "服务志愿者id串",
					"allowEmptyValue": false
				},
				"volunteerVos": {
					"type": "array",
					"description": "服务志愿者",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/VolunteerVo"
					}
				}
			},
			"title": "OrderManage对象",
			"description": "点单管理表"
		},
		"OrgDataVo": {
			"type": "object",
			"properties": {
				"childOrgVolNum": {
					"type": "string",
					"description": "下级组织人数",
					"allowEmptyValue": false
				},
				"fiftyoneToFiftyfive": {
					"type": "string"
				},
				"fiftysixToSixty": {
					"type": "string"
				},
				"fortysixToFifty": {
					"type": "string"
				},
				"fourteenToEighteen": {
					"type": "string"
				},
				"greaterSeventysix": {
					"type": "string"
				},
				"localCredit": {
					"type": "string",
					"description": "本级志愿者信用时数",
					"allowEmptyValue": false
				},
				"monthActiveNum": {
					"type": "string",
					"description": "当月活跃人数",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "组织name",
					"allowEmptyValue": false
				},
				"newOrgNum": {
					"type": "string",
					"description": "新增数量",
					"allowEmptyValue": false
				},
				"newOrgVolNum": {
					"type": "string",
					"description": "组织新增人数",
					"allowEmptyValue": false
				},
				"nineteenToTwentyfive": {
					"type": "string"
				},
				"orgId": {
					"type": "string",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"orgNum": {
					"type": "string",
					"description": "组织机构数量",
					"allowEmptyValue": false
				},
				"quitOrgVolNum": {
					"type": "string",
					"description": "组织退出人数",
					"allowEmptyValue": false
				},
				"seventyoneToSeventyfive": {
					"type": "string"
				},
				"sixtyoneToSixtyfive": {
					"type": "string"
				},
				"sixtysixToSeventy": {
					"type": "string"
				},
				"thirtysixToFortyfive": {
					"type": "string"
				},
				"totalActiveNum": {
					"type": "string",
					"description": "总活跃人数",
					"allowEmptyValue": false
				},
				"totalCredit": {
					"type": "string",
					"description": "组织信用总时数",
					"allowEmptyValue": false
				},
				"totalVolNum": {
					"type": "string",
					"description": "组织总人数",
					"allowEmptyValue": false
				},
				"twentysixToThirtyfive": {
					"type": "string"
				},
				"yearActiveNum": {
					"type": "string",
					"description": "年活跃人数",
					"allowEmptyValue": false
				},
				"zeroToThirteen": {
					"type": "string"
				}
			},
			"title": "OrgDataVo",
			"description": "组织数据出参"
		},
		"OrgRankVo": {
			"type": "object",
			"properties": {
				"credit": {
					"type": "string",
					"description": "服务时长",
					"allowEmptyValue": false
				},
				"orgName": {
					"type": "string",
					"description": "组织名",
					"allowEmptyValue": false
				}
			},
			"title": "OrgRankVo",
			"description": "团队服务时长排行出参"
		},
		"OrganizationInformationPerfectQueryParam对象": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				}
			},
			"title": "OrganizationInformationPerfectQueryParam对象",
			"description": "组织信息完善表查询参数"
		},
		"OrganizationInformationPerfect对象": {
			"type": "object",
			"properties": {
				"activityRegion": {
					"type": "string",
					"description": "活动领域",
					"allowEmptyValue": false
				},
				"context": {
					"type": "string",
					"description": "主要服务内容",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"establishTime": {
					"type": "string",
					"format": "date-time",
					"description": "成立日期",
					"allowEmptyValue": false
				},
				"fundsSource": {
					"type": "integer",
					"format": "int32",
					"description": "资金来源 0 自筹, 1 众筹,2 政府购买,3 赞助,4 公益创投,5 福彩公益全资助,6 捐助,7 其他",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"orgId": {
					"type": "integer",
					"format": "int64",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"place": {
					"type": "string",
					"description": "企业/学校/单位",
					"allowEmptyValue": false
				},
				"prove": {
					"type": "string",
					"description": "证明",
					"allowEmptyValue": false
				},
				"responsiblePersonName": {
					"type": "string",
					"description": "负责人姓名",
					"allowEmptyValue": false
				},
				"responsiblePersonPhone": {
					"type": "string",
					"description": "负责人手机",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "OrganizationInformationPerfect对象",
			"description": "组织信息完善表"
		},
		"PracticeRankingQueryParam": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				}
			},
			"title": "PracticeRankingQueryParam",
			"description": "实践排行查询参数"
		},
		"PracticeRankingVo": {
			"type": "object",
			"properties": {
				"activityNum": {
					"type": "integer",
					"format": "int32",
					"description": "活动服务次数",
					"allowEmptyValue": false
				},
				"creditHours": {
					"type": "number",
					"description": "信用时数",
					"allowEmptyValue": false
				},
				"id": {
					"type": "string",
					"description": "支援队伍id",
					"allowEmptyValue": false
				},
				"imageUrl": {
					"type": "string",
					"description": "图片",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "name",
					"allowEmptyValue": false
				},
				"orderNum": {
					"type": "integer",
					"format": "int32",
					"description": "点单服务次数",
					"allowEmptyValue": false
				}
			},
			"title": "PracticeRankingVo",
			"description": "实践排行出参"
		},
		"QueryAdminWebParam": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"orderBy": {
					"type": "string",
					"description": "排序方式  asc , desc",
					"allowEmptyValue": false
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				},
				"sort": {
					"type": "string",
					"description": "排序字段",
					"allowEmptyValue": false
				}
			},
			"title": "QueryAdminWebParam",
			"description": "志愿队伍-队伍查询本级管理员入参"
		},
		"RegionQueryParam对象": {
			"type": "object",
			"properties": {
				"parentId": {
					"type": "integer",
					"format": "int64",
					"description": "父级区域id",
					"allowEmptyValue": false
				},
				"type": {
					"type": "string",
					"description": "区域类型 0：市 1：区 2：街道",
					"allowEmptyValue": false
				}
			},
			"title": "RegionQueryParam对象",
			"description": "区域表查询参数"
		},
		"Region对象": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "名称",
					"allowEmptyValue": false
				},
				"parentId": {
					"type": "integer",
					"format": "int64",
					"description": "父级区域id",
					"allowEmptyValue": false
				},
				"type": {
					"type": "string",
					"description": "区域类型 0：市 1：区 2：街道",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "Region对象",
			"description": "区域表"
		},
		"SelectionOperationWebParam": {
			"type": "object",
			"properties": {
				"ids": {
					"type": "array",
					"description": "id",
					"allowEmptyValue": false,
					"items": {
						"type": "integer",
						"format": "int64"
					}
				},
				"type": {
					"type": "integer",
					"format": "int32",
					"description": "操作类型 0 删除 , 1 启用 , 2 禁用",
					"allowEmptyValue": false
				}
			},
			"title": "SelectionOperationWebParam",
			"description": "志愿队伍-队伍管理多选操作入参"
		},
		"ServiceManageQueryParam对象": {
			"type": "object",
			"properties": {
				"beginTime": {
					"type": "string",
					"format": "date-time",
					"description": "开始时间",
					"allowEmptyValue": false
				},
				"city": {
					"type": "string",
					"description": "当前登录人所属市",
					"allowEmptyValue": false
				},
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"currentUserOrgId": {
					"type": "string",
					"description": "当前登录人组织id",
					"allowEmptyValue": false
				},
				"endTime": {
					"type": "string",
					"format": "date-time",
					"description": "结束时间",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"orgId": {
					"type": "integer",
					"format": "int64",
					"description": "服务组织id",
					"allowEmptyValue": false
				},
				"serviceType": {
					"type": "string",
					"description": "服务类型",
					"allowEmptyValue": false
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：待提交，1：待审核，2：已审核，3：已驳回，4：已结束",
					"allowEmptyValue": false
				},
				"streetTown": {
					"type": "string",
					"description": "所属街镇",
					"allowEmptyValue": false
				},
				"title": {
					"type": "string",
					"description": "标题",
					"allowEmptyValue": false
				}
			},
			"title": "ServiceManageQueryParam对象",
			"description": "服务管理表查询参数"
		},
		"ServiceManage对象": {
			"type": "object",
			"properties": {
				"address": {
					"type": "string",
					"description": "服务地点",
					"allowEmptyValue": false
				},
				"alreadyClickNumber": {
					"type": "integer",
					"format": "int32",
					"description": "已点次数",
					"allowEmptyValue": false
				},
				"auditId": {
					"type": "integer",
					"format": "int64",
					"description": "审核人id",
					"allowEmptyValue": false
				},
				"auditName": {
					"type": "string",
					"description": "审核人名",
					"allowEmptyValue": false
				},
				"auditOpinion": {
					"type": "string",
					"description": "审核意见",
					"allowEmptyValue": false
				},
				"auditTime": {
					"type": "string",
					"format": "date-time",
					"description": "审核时间",
					"allowEmptyValue": false
				},
				"city": {
					"type": "string",
					"description": "可服务区域市",
					"allowEmptyValue": false
				},
				"clickNumber": {
					"type": "integer",
					"format": "int32",
					"description": "可点次数",
					"allowEmptyValue": false
				},
				"county": {
					"type": "string",
					"description": "可服务区域区县",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "发布时间",
					"allowEmptyValue": false
				},
				"creatorId": {
					"type": "integer",
					"format": "int64",
					"description": "创建人用户id",
					"allowEmptyValue": false
				},
				"description": {
					"type": "string",
					"description": "介绍",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"imageUrl": {
					"type": "string",
					"description": "图片地址",
					"allowEmptyValue": false
				},
				"mobile": {
					"type": "string",
					"description": "服务者手机号",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "服务者姓名",
					"allowEmptyValue": false
				},
				"orderManages": {
					"type": "array",
					"description": "评价信息",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderManage对象"
					}
				},
				"orderType": {
					"type": "string",
					"description": "点单类型， 0 阵地管理员点单, 1 所有人点单",
					"allowEmptyValue": false
				},
				"orgId": {
					"type": "integer",
					"format": "int64",
					"description": "服务组织id",
					"allowEmptyValue": false
				},
				"orgName": {
					"type": "string",
					"description": "服务组织",
					"allowEmptyValue": false
				},
				"province": {
					"type": "string",
					"description": "可服务区域省",
					"allowEmptyValue": false
				},
				"serviceBeginTime": {
					"type": "string",
					"format": "date-time",
					"description": "服务开始时间",
					"allowEmptyValue": false
				},
				"serviceEndTime": {
					"type": "string",
					"format": "date-time",
					"description": "服务结束时间",
					"allowEmptyValue": false
				},
				"serviceMethod": {
					"type": "string",
					"description": "服务方式",
					"allowEmptyValue": false
				},
				"serviceType": {
					"type": "string",
					"description": "服务类型",
					"allowEmptyValue": false
				},
				"star": {
					"type": "number",
					"format": "double",
					"description": "评价星级",
					"allowEmptyValue": false
				},
				"starNum": {
					"type": "integer",
					"format": "int32",
					"description": "评价次数",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：待提交，1：待审核，2：已审核，3：已驳回，4：已结束",
					"allowEmptyValue": false
				},
				"street": {
					"type": "string",
					"description": "可服务区域街道",
					"allowEmptyValue": false
				},
				"title": {
					"type": "string",
					"description": "标题",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "ServiceManage对象",
			"description": "服务管理表"
		},
		"SixMonthCreditVo": {
			"type": "object",
			"properties": {
				"credit": {
					"type": "number",
					"format": "double",
					"description": "信用时数",
					"allowEmptyValue": false
				},
				"month": {
					"type": "string",
					"description": "月份",
					"allowEmptyValue": false
				}
			},
			"title": "SixMonthCreditVo",
			"description": "近六个月信用时数出参"
		},
		"StatusParam": {
			"type": "object",
			"properties": {
				"auditId": {
					"type": "integer",
					"format": "int64",
					"description": "审核人id",
					"allowEmptyValue": false
				},
				"auditName": {
					"type": "string",
					"description": "审核人姓名",
					"allowEmptyValue": false
				},
				"auditOpinion": {
					"type": "string",
					"description": "审核意见",
					"allowEmptyValue": false
				},
				"ids": {
					"type": "string",
					"description": "ids",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：待审核，1：已通过，2：已驳回",
					"allowEmptyValue": false
				}
			},
			"title": "StatusParam",
			"description": "公用修改状态参数"
		},
		"TenantConfiguration对象": {
			"type": "object",
			"properties": {
				"areaName": {
					"type": "string",
					"description": "地区名称",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"tenentId": {
					"type": "integer",
					"format": "int32",
					"description": "租户id",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "TenantConfiguration对象",
			"description": "租户配置表"
		},
		"TypeConfigurationWebQueryParam": {
			"type": "object",
			"properties": {
				"typeConfigurationKeyWord": {
					"type": "string",
					"description": "关键词",
					"allowEmptyValue": false
				}
			},
			"title": "TypeConfigurationWebQueryParam",
			"description": "资讯栏目web查询参数"
		},
		"TypeConfiguration对象": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "名称",
					"allowEmptyValue": false
				},
				"type": {
					"type": "integer",
					"format": "int32",
					"description": "类型 0 活动类型 , 1 服务类型 , 2 资讯栏目类型 , 3 课堂栏目类型",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "TypeConfiguration对象",
			"description": "类型配置"
		},
		"UpdateByTypeWebParam": {
			"type": "object",
			"properties": {
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "id",
					"allowEmptyValue": false
				},
				"info": {
					"type": "string",
					"description": "导航类型内容, 0 成为志愿者, 1 队伍入驻, 2 志愿队伍, 3 活动报名, 4 活动服务 ,5 点单服务, 6 心愿池, 7 志愿签到, 8 文明瞬间, 9 文明快讯, 10 宣讲课堂， 11 文明榜单， 12 实践排行， 13 实践阵地",
					"allowEmptyValue": false
				},
				"navigationName": {
					"type": "string",
					"description": "导航名称",
					"allowEmptyValue": false
				},
				"navigationType": {
					"type": "string",
					"description": "导航类型, 0 系统功能, 1 url链接",
					"allowEmptyValue": false
				},
				"showName": {
					"type": "string",
					"description": "显示名称",
					"allowEmptyValue": false
				},
				"systemFunction": {
					"type": "integer",
					"format": "int32",
					"description": "系统功能, 0 活动报名 , 1 活动服务, 2 点单服务, 3 文明快讯, 4 宣讲课堂",
					"allowEmptyValue": false
				},
				"urlInfo": {
					"type": "string",
					"description": "url链接内容",
					"allowEmptyValue": false
				}
			},
			"title": "UpdateByTypeWebParam",
			"description": "首页导航、快捷入口 web修改入参"
		},
		"UpdateListConfigurationStatusWebParam": {
			"type": "object",
			"properties": {
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "榜单id",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态",
					"allowEmptyValue": false
				}
			},
			"title": "UpdateListConfigurationStatusWebParam",
			"description": "web状态修改param"
		},
		"UpdateListTypeStatusWebParam": {
			"type": "object",
			"properties": {
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "榜单类型id",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态",
					"allowEmptyValue": false
				}
			},
			"title": "UpdateListTypeStatusWebParam",
			"description": "web状态修改param"
		},
		"UpdatePermissionWebParam": {
			"type": "object",
			"properties": {
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "id",
					"allowEmptyValue": false
				},
				"permissions": {
					"type": "array",
					"description": "权限 1：组织管理员，2：审核权限管理员，3：组织入驻审核角色，4：文昌新时代管理员",
					"allowEmptyValue": false,
					"items": {
						"type": "integer",
						"format": "int32"
					}
				}
			},
			"title": "UpdatePermissionWebParam",
			"description": "管理员-志愿队伍修改管理员权限"
		},
		"UpdateStatusInWebParam": {
			"type": "object",
			"properties": {
				"auditId": {
					"type": "string",
					"description": "审核人id",
					"allowEmptyValue": false
				},
				"auditName": {
					"type": "string",
					"description": "审核人",
					"allowEmptyValue": false
				},
				"auditOpinion": {
					"type": "string",
					"description": "审核意见",
					"allowEmptyValue": false
				},
				"ids": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态,2：生成，3：驳回",
					"allowEmptyValue": false
				}
			},
			"title": "UpdateStatusInWebParam",
			"description": "志愿队伍-队伍入驻审核队伍入参"
		},
		"UpdateStatusWebParam": {
			"type": "object",
			"properties": {
				"ids": {
					"type": "array",
					"description": "id",
					"allowEmptyValue": false,
					"items": {
						"type": "integer",
						"format": "int64"
					}
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态 0 禁用 , 1 启用",
					"allowEmptyValue": false
				}
			},
			"title": "UpdateStatusWebParam",
			"description": "管理员-实践阵地修改状态入参"
		},
		"UserQueryParam对象": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				}
			},
			"title": "UserQueryParam对象",
			"description": "用户信息表查询参数"
		},
		"UserRegisterInformationAppVo": {
			"type": "object",
			"properties": {
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"politic": {
					"type": "string",
					"description": "政治面貌",
					"allowEmptyValue": false
				}
			},
			"title": "UserRegisterInformationAppVo",
			"description": "app端用户注册信息入参"
		},
		"UserRoleInfoQueryParam对象": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				}
			},
			"title": "UserRoleInfoQueryParam对象",
			"description": "APP用户角色表查询参数"
		},
		"UserRoleInfo对象": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"roleId": {
					"type": "integer",
					"format": "int32",
					"description": "角色，1：普通用户，2：志愿者，3：实践阵地管理员",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				}
			},
			"title": "UserRoleInfo对象",
			"description": "APP用户角色表"
		},
		"UserWebUpdateParam": {
			"type": "object",
			"properties": {
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "名称",
					"allowEmptyValue": false
				},
				"password": {
					"type": "string",
					"description": "密码",
					"allowEmptyValue": false
				},
				"phone": {
					"type": "string",
					"description": "手机号",
					"allowEmptyValue": false
				},
				"url": {
					"type": "string",
					"description": "头像",
					"allowEmptyValue": false
				}
			},
			"title": "UserWebUpdateParam",
			"description": "UserWebUpdateParam"
		},
		"User对象": {
			"type": "object",
			"properties": {
				"account": {
					"type": "string",
					"description": "账户",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "名称",
					"allowEmptyValue": false
				},
				"organizationId": {
					"type": "string",
					"description": "所属组织id",
					"allowEmptyValue": false
				},
				"password": {
					"type": "string",
					"description": "密码",
					"allowEmptyValue": false
				},
				"phone": {
					"type": "string",
					"description": "手机号",
					"allowEmptyValue": false
				},
				"practicePositionId": {
					"type": "string",
					"description": "所属阵地id",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"url": {
					"type": "string",
					"description": "用户头像",
					"allowEmptyValue": false
				}
			},
			"title": "User对象",
			"description": "用户信息表"
		},
		"VolunteerAuditQueryParam对象": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"idNumber": {
					"type": "string",
					"description": "证件号码",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "用户姓名",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"orgId": {
					"type": "integer",
					"format": "int64",
					"description": "组织机构id",
					"allowEmptyValue": false
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：未审核，1：已审核",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				}
			},
			"title": "VolunteerAuditQueryParam对象",
			"description": "志愿者审核表查询参数"
		},
		"VolunteerAudit对象": {
			"type": "object",
			"properties": {
				"age": {
					"type": "integer",
					"format": "int32",
					"description": "年龄",
					"allowEmptyValue": false
				},
				"applyTime": {
					"type": "string",
					"format": "date-time",
					"description": "申请时间",
					"allowEmptyValue": false
				},
				"auditId": {
					"type": "integer",
					"format": "int64",
					"description": "审核人id",
					"allowEmptyValue": false
				},
				"auditName": {
					"type": "string",
					"description": "审核人名",
					"allowEmptyValue": false
				},
				"auditOpinion": {
					"type": "string",
					"description": "审核意见",
					"allowEmptyValue": false
				},
				"auditTime": {
					"type": "string",
					"format": "date-time",
					"description": "审核时间",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"idNumber": {
					"type": "string",
					"description": "证件号码",
					"allowEmptyValue": false
				},
				"joinTime": {
					"type": "string",
					"format": "date-time",
					"description": "加入时间",
					"allowEmptyValue": false
				},
				"mobile": {
					"type": "string",
					"description": "手机号",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "用户姓名",
					"allowEmptyValue": false
				},
				"organizationId": {
					"type": "integer",
					"format": "int64",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"organizationName": {
					"type": "string",
					"description": "组织名称",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：未审核，1：已审核, 2:已退出",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				}
			},
			"title": "VolunteerAudit对象",
			"description": "志愿者审核表"
		},
		"VolunteerDrawVo": {
			"type": "object",
			"properties": {
				"art": {
					"type": "integer",
					"format": "int32",
					"description": "美术设计",
					"allowEmptyValue": false
				},
				"belowTwentyfive": {
					"type": "string",
					"description": "25以下",
					"allowEmptyValue": false
				},
				"camera": {
					"type": "integer",
					"format": "int32",
					"description": "摄影摄像",
					"allowEmptyValue": false
				},
				"culture": {
					"type": "integer",
					"format": "int32",
					"description": "文化艺术",
					"allowEmptyValue": false
				},
				"education": {
					"type": "integer",
					"format": "int32",
					"description": "教育培训",
					"allowEmptyValue": false
				},
				"female": {
					"type": "string",
					"description": "女性比例",
					"allowEmptyValue": false
				},
				"fortysixToFifty": {
					"type": "string"
				},
				"greaterFiftyone": {
					"type": "string"
				},
				"leagueMember": {
					"type": "string",
					"description": "团员比例",
					"allowEmptyValue": false
				},
				"male": {
					"type": "string",
					"description": "男性比例",
					"allowEmptyValue": false
				},
				"masses": {
					"type": "string",
					"description": "群众比例",
					"allowEmptyValue": false
				},
				"otherMember": {
					"type": "string",
					"description": "其他比例",
					"allowEmptyValue": false
				},
				"partyMember": {
					"type": "string",
					"description": "党员比例",
					"allowEmptyValue": false
				},
				"sports": {
					"type": "integer",
					"format": "int32",
					"description": "体育",
					"allowEmptyValue": false
				},
				"thirtysixToFortyfive": {
					"type": "string"
				},
				"twentysixToThirtyfive": {
					"type": "string"
				}
			},
			"title": "VolunteerDrawVo",
			"description": "志愿者画像出参"
		},
		"VolunteerOrgVo": {
			"type": "object",
			"properties": {
				"num": {
					"type": "string",
					"description": "志愿者数量",
					"allowEmptyValue": false
				},
				"orgName": {
					"type": "string",
					"description": "组织机构名",
					"allowEmptyValue": false
				}
			},
			"title": "VolunteerOrgVo",
			"description": "志愿者分布出参"
		},
		"VolunteerQueryParam对象": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"desire": {
					"type": "string",
					"description": "志愿服务意愿",
					"allowEmptyValue": false
				},
				"idNumber": {
					"type": "string",
					"description": "证件号码",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"label": {
					"type": "string",
					"description": "志愿者标签",
					"allowEmptyValue": false
				},
				"maxHonorHours": {
					"type": "number",
					"description": "最大荣誉时数",
					"allowEmptyValue": false
				},
				"minHonorHours": {
					"type": "number",
					"description": "最小荣誉时数",
					"allowEmptyValue": false
				},
				"mobile": {
					"type": "string",
					"description": "手机号",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "姓名",
					"allowEmptyValue": false
				},
				"no": {
					"type": "string",
					"description": "志愿者编号",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"orgId": {
					"type": "integer",
					"format": "int64",
					"description": "组织机构id",
					"allowEmptyValue": false
				},
				"politic": {
					"type": "string",
					"description": "政治面貌",
					"allowEmptyValue": false
				},
				"primaryCompany": {
					"type": "string",
					"description": "原单位及职务",
					"allowEmptyValue": false
				},
				"range": {
					"type": "integer",
					"format": "int32",
					"description": "范围，0：本级，1：所有",
					"allowEmptyValue": false
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：待审核，1：已通过，2：已驳回",
					"allowEmptyValue": false
				},
				"studentNo": {
					"type": "string",
					"description": "学号",
					"allowEmptyValue": false
				}
			},
			"title": "VolunteerQueryParam对象",
			"description": "志愿者管理表查询参数"
		},
		"VolunteerRankVo": {
			"type": "object",
			"properties": {
				"credit": {
					"type": "string",
					"description": "服务时长",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "志愿者姓名",
					"allowEmptyValue": false
				}
			},
			"title": "VolunteerRankVo",
			"description": "志愿者排行Top10出参"
		},
		"VolunteerTeamAudit对象": {
			"type": "object",
			"properties": {
				"applyPerson": {
					"type": "string",
					"description": "申请人",
					"allowEmptyValue": false
				},
				"applyTime": {
					"type": "string",
					"format": "date-time",
					"description": "申请时间",
					"allowEmptyValue": false
				},
				"auditCause": {
					"type": "string",
					"description": "审核原因",
					"allowEmptyValue": false
				},
				"auditPerson": {
					"type": "string",
					"description": "审核人",
					"allowEmptyValue": false
				},
				"auditTime": {
					"type": "string",
					"format": "date-time",
					"description": "审核时间",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "机构名称",
					"allowEmptyValue": false
				},
				"organzationId": {
					"type": "integer",
					"format": "int64",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态  1：未审核，2：已审核，3：已驳回",
					"allowEmptyValue": false
				},
				"topOrganzation": {
					"type": "string",
					"description": "上级机构",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "VolunteerTeamAudit对象",
			"description": "志愿队伍-队伍审核表"
		},
		"VolunteerTeamExternalTopOrganizationQueryParam对象": {
			"type": "object",
			"properties": {
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				}
			},
			"title": "VolunteerTeamExternalTopOrganizationQueryParam对象",
			"description": "志愿队伍-外部上级组织表查询参数"
		},
		"VolunteerTeamExternalTopOrganization对象": {
			"type": "object",
			"properties": {
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"externalTopOrganizationId": {
					"type": "integer",
					"format": "int64",
					"description": "外部上级组织id",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"orgId": {
					"type": "integer",
					"format": "int64",
					"description": "组织id",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				}
			},
			"title": "VolunteerTeamExternalTopOrganization对象",
			"description": "志愿队伍-外部上级组织表"
		},
		"VolunteerTeamIn对象": {
			"type": "object",
			"properties": {
				"applyCause": {
					"type": "string",
					"description": "申请原因",
					"allowEmptyValue": false
				},
				"applyPerson": {
					"type": "string",
					"description": "审核人",
					"allowEmptyValue": false
				},
				"applyTime": {
					"type": "string",
					"format": "date-time",
					"description": "申请时间",
					"allowEmptyValue": false
				},
				"area": {
					"type": "string",
					"description": "区",
					"allowEmptyValue": false
				},
				"auditOpinion": {
					"type": "string",
					"description": "审核意见",
					"allowEmptyValue": false
				},
				"auditPerson": {
					"type": "string",
					"description": "申请人",
					"allowEmptyValue": false
				},
				"auditTime": {
					"type": "string",
					"format": "date-time",
					"description": "审核时间",
					"allowEmptyValue": false
				},
				"cause": {
					"type": "string",
					"description": "未生成原因",
					"allowEmptyValue": false
				},
				"city": {
					"type": "string",
					"description": "市",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"email": {
					"type": "string",
					"description": "邮箱",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"idCard": {
					"type": "string",
					"description": "身份证",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "组织名称",
					"allowEmptyValue": false
				},
				"organizationIntroduced": {
					"type": "string",
					"description": "组织介绍",
					"allowEmptyValue": false
				},
				"phone": {
					"type": "string",
					"description": "手机号",
					"allowEmptyValue": false
				},
				"province": {
					"type": "string",
					"description": "省",
					"allowEmptyValue": false
				},
				"register": {
					"type": "integer",
					"format": "int32",
					"description": "民政登记注册,0：否，1：是",
					"allowEmptyValue": false
				},
				"relatedInformation": {
					"type": "string",
					"description": "组织相关资料",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态,1：未生成，2：已生成，3：已驳回，待审核",
					"allowEmptyValue": false
				},
				"type": {
					"type": "string",
					"description": "组织类型",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"volunteerTeamAuditId": {
					"type": "integer",
					"format": "int64",
					"description": "队伍审核id",
					"allowEmptyValue": false
				}
			},
			"title": "VolunteerTeamIn对象",
			"description": "志愿队伍-队伍入驻表"
		},
		"VolunteerVo": {
			"type": "object",
			"properties": {
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "id",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "姓名",
					"allowEmptyValue": false
				}
			},
			"title": "VolunteerVo",
			"description": "VolunteerVo"
		},
		"Volunteer对象": {
			"type": "object",
			"properties": {
				"address": {
					"type": "string",
					"description": "详细地址",
					"allowEmptyValue": false
				},
				"age": {
					"type": "integer",
					"format": "int32",
					"description": "年龄",
					"allowEmptyValue": false
				},
				"auditId": {
					"type": "integer",
					"format": "int64",
					"description": "审核人id",
					"allowEmptyValue": false
				},
				"auditName": {
					"type": "string",
					"description": "审核人名",
					"allowEmptyValue": false
				},
				"auditOpinion": {
					"type": "string",
					"description": "审核意见",
					"allowEmptyValue": false
				},
				"auditTime": {
					"type": "string",
					"format": "date-time",
					"description": "审核时间",
					"allowEmptyValue": false
				},
				"cardNumber": {
					"type": "string",
					"description": "卡号",
					"allowEmptyValue": false
				},
				"cardType": {
					"type": "string",
					"description": "卡类型",
					"allowEmptyValue": false
				},
				"city": {
					"type": "string",
					"description": "现居住地市",
					"allowEmptyValue": false
				},
				"contactMethod": {
					"type": "string",
					"description": "家属联系电话",
					"allowEmptyValue": false
				},
				"contacts": {
					"type": "string",
					"description": "家属联系人",
					"allowEmptyValue": false
				},
				"county": {
					"type": "string",
					"description": "现居住地区县",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"creditHours": {
					"type": "number",
					"description": "信用时数",
					"allowEmptyValue": false
				},
				"desire": {
					"type": "string",
					"description": "志愿服务意愿",
					"allowEmptyValue": false
				},
				"education": {
					"type": "string",
					"description": "最高学历",
					"allowEmptyValue": false
				},
				"email": {
					"type": "string",
					"description": "电子邮件",
					"allowEmptyValue": false
				},
				"employmentSituation": {
					"type": "string",
					"description": "从业情况",
					"allowEmptyValue": false
				},
				"field": {
					"type": "string",
					"description": "服务领域",
					"allowEmptyValue": false
				},
				"freeTime": {
					"type": "string",
					"description": "空闲时间",
					"allowEmptyValue": false
				},
				"headPortrait": {
					"type": "string",
					"description": "头像路径",
					"allowEmptyValue": false
				},
				"height": {
					"type": "string",
					"description": "身高",
					"allowEmptyValue": false
				},
				"honorHours": {
					"type": "number",
					"description": "荣誉时数",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"idNumber": {
					"type": "string",
					"description": "证件号码",
					"allowEmptyValue": false
				},
				"idType": {
					"type": "string",
					"description": "证件类型",
					"allowEmptyValue": false
				},
				"label": {
					"type": "string",
					"description": "志愿者标签",
					"allowEmptyValue": false
				},
				"mobile": {
					"type": "string",
					"description": "手机号",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "姓名",
					"allowEmptyValue": false
				},
				"no": {
					"type": "string",
					"description": "志愿者编号",
					"allowEmptyValue": false
				},
				"orgId": {
					"type": "string",
					"description": "加入的组织id",
					"allowEmptyValue": false
				},
				"parentOrganization": {
					"type": "string",
					"description": "所有上级组织的id，不包含自身id",
					"allowEmptyValue": false
				},
				"politic": {
					"type": "string",
					"description": "政治面貌",
					"allowEmptyValue": false
				},
				"primaryCompany": {
					"type": "string",
					"description": "原单位及职务",
					"allowEmptyValue": false
				},
				"province": {
					"type": "string",
					"description": "现居住地省",
					"allowEmptyValue": false
				},
				"qq": {
					"type": "string",
					"description": "QQ",
					"allowEmptyValue": false
				},
				"relationship": {
					"type": "string",
					"description": "双方关系",
					"allowEmptyValue": false
				},
				"sex": {
					"type": "string",
					"description": "性别",
					"allowEmptyValue": false
				},
				"signCity": {
					"type": "string",
					"description": "注册地市",
					"allowEmptyValue": false
				},
				"signCounty": {
					"type": "string",
					"description": "注册地区县",
					"allowEmptyValue": false
				},
				"signProvince": {
					"type": "string",
					"description": "注册地省",
					"allowEmptyValue": false
				},
				"signTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"skill": {
					"type": "string",
					"description": "擅长技能",
					"allowEmptyValue": false
				},
				"star": {
					"type": "integer",
					"format": "int32",
					"description": "星级",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：待审核，1：已通过，2：已驳回",
					"allowEmptyValue": false
				},
				"studentNo": {
					"type": "string",
					"description": "学号",
					"allowEmptyValue": false
				},
				"telephone": {
					"type": "string",
					"description": "固定电话",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "修改时间",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				},
				"volunteerAuditList": {
					"type": "array",
					"description": "加入的组织信息list",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/VolunteerAudit对象"
					}
				},
				"workUnit": {
					"type": "string",
					"description": "学校、工作单位",
					"allowEmptyValue": false
				}
			},
			"title": "Volunteer对象",
			"description": "志愿者管理表"
		},
		"WGJsonResult": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"type": "object"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult"
		},
		"WGJsonResult«ActivityVo»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/ActivityVo"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«ActivityVo»"
		},
		"WGJsonResult«CoreDataVo»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/CoreDataVo"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«CoreDataVo»"
		},
		"WGJsonResult«List«ActivityCategoryVo»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"type": "array",
						"items": {
							"$ref": "#/definitions/ActivityCategoryVo"
						}
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«List«ActivityCategoryVo»»"
		},
		"WGJsonResult«List«OrgRankVo»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"type": "array",
						"items": {
							"$ref": "#/definitions/OrgRankVo"
						}
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«List«OrgRankVo»»"
		},
		"WGJsonResult«List«Region对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"type": "array",
						"items": {
							"$ref": "#/definitions/Region对象"
						}
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«List«Region对象»»"
		},
		"WGJsonResult«List«VolunteerOrgVo»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"type": "array",
						"items": {
							"$ref": "#/definitions/VolunteerOrgVo"
						}
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«List«VolunteerOrgVo»»"
		},
		"WGJsonResult«List«VolunteerRankVo»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"type": "array",
						"items": {
							"$ref": "#/definitions/VolunteerRankVo"
						}
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«List«VolunteerRankVo»»"
		},
		"WGJsonResult«TenantConfiguration对象»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/TenantConfiguration对象"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«TenantConfiguration对象»"
		},
		"WGJsonResult«VolunteerDrawVo»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/VolunteerDrawVo"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«VolunteerDrawVo»"
		},
		"WGJsonResult«分页«ActivityRecruit对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«ActivityRecruit对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«ActivityRecruit对象»»"
		},
		"WGJsonResult«分页«ActivityRegistration对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«ActivityRegistration对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«ActivityRegistration对象»»"
		},
		"WGJsonResult«分页«ActivitySignInDetail对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«ActivitySignInDetail对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«ActivitySignInDetail对象»»"
		},
		"WGJsonResult«分页«ActivitySignInTodayVo»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«ActivitySignInTodayVo»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«ActivitySignInTodayVo»»"
		},
		"WGJsonResult«分页«ActivitySignIn对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«ActivitySignIn对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«ActivitySignIn对象»»"
		},
		"WGJsonResult«分页«AdminRoleInfo对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«AdminRoleInfo对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«AdminRoleInfo对象»»"
		},
		"WGJsonResult«分页«Clues对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«Clues对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«Clues对象»»"
		},
		"WGJsonResult«分页«CreditHoursData对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«CreditHoursData对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«CreditHoursData对象»»"
		},
		"WGJsonResult«分页«Fabulous对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«Fabulous对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«Fabulous对象»»"
		},
		"WGJsonResult«分页«HomeNavigation对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«HomeNavigation对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«HomeNavigation对象»»"
		},
		"WGJsonResult«分页«OrderManageEvaluate对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«OrderManageEvaluate对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«OrderManageEvaluate对象»»"
		},
		"WGJsonResult«分页«OrderManage对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«OrderManage对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«OrderManage对象»»"
		},
		"WGJsonResult«分页«OrgDataVo»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«OrgDataVo»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«OrgDataVo»»"
		},
		"WGJsonResult«分页«OrganizationInformationPerfect对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«OrganizationInformationPerfect对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«OrganizationInformationPerfect对象»»"
		},
		"WGJsonResult«分页«PracticeRankingVo»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«PracticeRankingVo»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«PracticeRankingVo»»"
		},
		"WGJsonResult«分页«Region对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«Region对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«Region对象»»"
		},
		"WGJsonResult«分页«ServiceManage对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«ServiceManage对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«ServiceManage对象»»"
		},
		"WGJsonResult«分页«SixMonthCreditVo»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«SixMonthCreditVo»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«SixMonthCreditVo»»"
		},
		"WGJsonResult«分页«UserRoleInfo对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«UserRoleInfo对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«UserRoleInfo对象»»"
		},
		"WGJsonResult«分页«User对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«User对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«User对象»»"
		},
		"WGJsonResult«分页«VolunteerAudit对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«VolunteerAudit对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«VolunteerAudit对象»»"
		},
		"WGJsonResult«分页«VolunteerTeamExternalTopOrganization对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«VolunteerTeamExternalTopOrganization对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«VolunteerTeamExternalTopOrganization对象»»"
		},
		"WGJsonResult«分页«VolunteerVo»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«VolunteerVo»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«VolunteerVo»»"
		},
		"WGJsonResult«分页«Volunteer对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«Volunteer对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«Volunteer对象»»"
		},
		"WGJsonResult«分页«WishManage对象»»": {
			"type": "object",
			"properties": {
				"appInfoId": {
					"type": "integer",
					"format": "int32"
				},
				"data": {
					"type": "array",
					"items": {
						"$ref": "#/definitions/分页«WishManage对象»"
					}
				},
				"end": {
					"type": "boolean"
				},
				"errorCode": {
					"type": "string"
				},
				"message": {
					"type": "string"
				},
				"requestId": {
					"type": "string"
				},
				"success": {
					"type": "boolean"
				},
				"total": {
					"type": "integer",
					"format": "int32"
				}
			},
			"title": "WGJsonResult«分页«WishManage对象»»"
		},
		"WishManageQueryParam对象": {
			"type": "object",
			"properties": {
				"beginTime": {
					"type": "string",
					"format": "date-time",
					"description": "开始时间",
					"allowEmptyValue": false
				},
				"current": {
					"type": "integer",
					"format": "int32",
					"example": 1,
					"description": "页码,默认为1",
					"allowEmptyValue": false
				},
				"currentUserId": {
					"type": "integer",
					"format": "int64",
					"description": "当前登录用户id",
					"allowEmptyValue": false
				},
				"currentUserOrgId": {
					"type": "string",
					"description": "当前登录人组织id",
					"allowEmptyValue": false
				},
				"endTime": {
					"type": "string",
					"format": "date-time",
					"description": "结束时间",
					"allowEmptyValue": false
				},
				"keyword": {
					"type": "string",
					"description": "搜索字符串",
					"allowEmptyValue": false
				},
				"orders": {
					"type": "array",
					"description": "排序",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderItem"
					}
				},
				"serviceType": {
					"type": "string",
					"description": "服务类型",
					"allowEmptyValue": false
				},
				"size": {
					"type": "integer",
					"format": "int32",
					"example": 10,
					"description": "页大小,默认为10",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：未处理，1：已处理，2：已驳回, 3:已删除",
					"allowEmptyValue": false
				},
				"title": {
					"type": "string",
					"description": "求助标题",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				}
			},
			"title": "WishManageQueryParam对象",
			"description": "心愿列表查询参数"
		},
		"WishManage对象": {
			"type": "object",
			"properties": {
				"address": {
					"type": "string",
					"description": "服务地址",
					"allowEmptyValue": false
				},
				"auditId": {
					"type": "integer",
					"format": "int64",
					"description": "审核人id",
					"allowEmptyValue": false
				},
				"auditName": {
					"type": "string",
					"description": "审核人名",
					"allowEmptyValue": false
				},
				"auditOpinion": {
					"type": "string",
					"description": "审核意见",
					"allowEmptyValue": false
				},
				"auditTime": {
					"type": "string",
					"format": "date-time",
					"description": "审核时间",
					"allowEmptyValue": false
				},
				"createTime": {
					"type": "string",
					"format": "date-time",
					"description": "创建时间",
					"allowEmptyValue": false
				},
				"description": {
					"type": "string",
					"description": "服务说明",
					"allowEmptyValue": false
				},
				"id": {
					"type": "integer",
					"format": "int64",
					"description": "主键",
					"allowEmptyValue": false
				},
				"imageUrl": {
					"type": "string",
					"description": "图片地址",
					"allowEmptyValue": false
				},
				"isCurrentUserLight": {
					"type": "boolean",
					"example": false,
					"description": "当前用户是否已点过赞",
					"allowEmptyValue": false
				},
				"lightNumber": {
					"type": "integer",
					"format": "int32",
					"description": "点亮次数",
					"allowEmptyValue": false
				},
				"mobile": {
					"type": "string",
					"description": "手机号码",
					"allowEmptyValue": false
				},
				"name": {
					"type": "string",
					"description": "求助人",
					"allowEmptyValue": false
				},
				"orgId": {
					"type": "integer",
					"format": "int64",
					"description": "服务组织id",
					"allowEmptyValue": false
				},
				"orgName": {
					"type": "string",
					"description": "服务组织",
					"allowEmptyValue": false
				},
				"remark": {
					"type": "string",
					"description": "备注",
					"allowEmptyValue": false
				},
				"serviceIdNumber": {
					"type": "string",
					"description": "服务者证件号",
					"allowEmptyValue": false
				},
				"serviceMobile": {
					"type": "string",
					"description": "服务者手机号",
					"allowEmptyValue": false
				},
				"serviceName": {
					"type": "string",
					"description": "服务者姓名",
					"allowEmptyValue": false
				},
				"serviceTime": {
					"type": "string",
					"format": "date-time",
					"description": "希望服务时间",
					"allowEmptyValue": false
				},
				"serviceType": {
					"type": "string",
					"description": "服务类型",
					"allowEmptyValue": false
				},
				"source": {
					"type": "string",
					"description": "心愿来源",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态，0：未处理，1：已处理，2：已驳回, 3:已删除",
					"allowEmptyValue": false
				},
				"title": {
					"type": "string",
					"description": "求助标题",
					"allowEmptyValue": false
				},
				"updateTime": {
					"type": "string",
					"format": "date-time",
					"description": "更新时间",
					"allowEmptyValue": false
				},
				"userId": {
					"type": "integer",
					"format": "int64",
					"description": "用户id",
					"allowEmptyValue": false
				}
			},
			"title": "WishManage对象",
			"description": "心愿列表"
		},
		"outNowOrgWebParam": {
			"type": "object",
			"properties": {
				"orgId": {
					"type": "integer",
					"format": "int64",
					"description": "当前队伍id",
					"allowEmptyValue": false
				},
				"topOrgId": {
					"type": "integer",
					"format": "int64",
					"description": "添加的上级id",
					"allowEmptyValue": false
				}
			},
			"title": "outNowOrgWebParam",
			"description": "web退出上级组织入参"
		},
		"updateStatusTeamWebParam": {
			"type": "object",
			"properties": {
				"auditId": {
					"type": "string",
					"description": "审核人",
					"allowEmptyValue": false
				},
				"auditOpinion": {
					"type": "string",
					"description": "审核原因",
					"allowEmptyValue": false
				},
				"ids": {
					"type": "string",
					"description": "id",
					"allowEmptyValue": false
				},
				"status": {
					"type": "integer",
					"format": "int32",
					"description": "状态 2 通过 , 3 驳回",
					"allowEmptyValue": false
				}
			},
			"title": "updateStatusTeamWebParam",
			"description": "志愿队伍-队伍审核修改状态入参"
		},
		"分页«ActivityDataVo»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/ActivityDataVo"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«ActivityDataVo»"
		},
		"分页«ActivityRecruit对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/ActivityRecruit对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«ActivityRecruit对象»"
		},
		"分页«ActivityRegistration对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/ActivityRegistration对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«ActivityRegistration对象»"
		},
		"分页«ActivitySignInDetail对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/ActivitySignInDetail对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«ActivitySignInDetail对象»"
		},
		"分页«ActivitySignInTodayVo»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/ActivitySignInTodayVo"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«ActivitySignInTodayVo»"
		},
		"分页«ActivitySignIn对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/ActivitySignIn对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«ActivitySignIn对象»"
		},
		"分页«AdminRoleInfo对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/AdminRoleInfo对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«AdminRoleInfo对象»"
		},
		"分页«Clues对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/Clues对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«Clues对象»"
		},
		"分页«CreditHoursData对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/CreditHoursData对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«CreditHoursData对象»"
		},
		"分页«Fabulous对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/Fabulous对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«Fabulous对象»"
		},
		"分页«HomeNavigation对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/HomeNavigation对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«HomeNavigation对象»"
		},
		"分页«OrderManageEvaluate对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderManageEvaluate对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«OrderManageEvaluate对象»"
		},
		"分页«OrderManage对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrderManage对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«OrderManage对象»"
		},
		"分页«OrgDataVo»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrgDataVo"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«OrgDataVo»"
		},
		"分页«OrganizationInformationPerfect对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/OrganizationInformationPerfect对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«OrganizationInformationPerfect对象»"
		},
		"分页«PracticeRankingVo»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/PracticeRankingVo"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«PracticeRankingVo»"
		},
		"分页«Region对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/Region对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«Region对象»"
		},
		"分页«ServiceManage对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/ServiceManage对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«ServiceManage对象»"
		},
		"分页«SixMonthCreditVo»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/SixMonthCreditVo"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«SixMonthCreditVo»"
		},
		"分页«UserRoleInfo对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/UserRoleInfo对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«UserRoleInfo对象»"
		},
		"分页«User对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/User对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«User对象»"
		},
		"分页«VolunteerAudit对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/VolunteerAudit对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«VolunteerAudit对象»"
		},
		"分页«VolunteerTeamExternalTopOrganization对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/VolunteerTeamExternalTopOrganization对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«VolunteerTeamExternalTopOrganization对象»"
		},
		"分页«VolunteerVo»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/VolunteerVo"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«VolunteerVo»"
		},
		"分页«Volunteer对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/Volunteer对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«Volunteer对象»"
		},
		"分页«WishManage对象»": {
			"type": "object",
			"properties": {
				"records": {
					"type": "array",
					"description": "数据列表",
					"allowEmptyValue": false,
					"items": {
						"$ref": "#/definitions/WishManage对象"
					}
				},
				"total": {
					"type": "integer",
					"format": "int64",
					"description": "总行数",
					"allowEmptyValue": false
				}
			},
			"title": "分页«WishManage对象»"
		}
	}
}
exports.json = json;
