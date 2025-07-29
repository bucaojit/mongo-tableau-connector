(function propertiesbuilder(attr) {
    var props = {};

    var auth = attr[connectionHelper.attributeAuthentication];
    if (auth === "auth-user-pass") {
        props["user"] = attr[connectionHelper.attributeUsername];
        props["password"] = attr[connectionHelper.attributePassword];
    }

    props["database"] = attr[connectionHelper.attributeDatabase];
    props["dialect"] = "mongosql";
    props["clientInfo"] = "tableau-connector+0.0.0";

    return props;
})
