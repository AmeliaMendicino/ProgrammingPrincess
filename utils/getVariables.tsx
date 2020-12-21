import * as espree from "espree";

export type Variable = {
	name: string;
	kind: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value?: any;
	type?: string;
};

/**
 * Takes a JavaScript program string and extracts the variables from
 * it, returning their names and what kind they are (e.g., const, let, var).
 *
 * @param {string} javascript A JavaScript program string
 * @returns {Variable[]} An array of variable names and what kind they are
 */
export function getVariables(javascript: string): Variable[] {
	const vars: Variable[] = [];

	const tree = espree.parse(javascript, {
		loc: true,
		ecmaVersion: 9,
	});

	tree.body.forEach((node) => {
		const { type, declarations = [], kind = "" } = node;
		if (type === "VariableDeclaration") {
			declarations.forEach((vd) => {
				const { type, name = "", properties = [] } = vd.id;
				switch (type) {
					case "ObjectPattern":
						// Object destructuring assignment: const { foo } = obj;
						properties.forEach((p) => {
							const {
								value: { type, name = "", left = {} },
							} = p;
							switch (type) {
								case "AssignmentPattern":
									// Assigning to new variables names and providing default values: const { foo: f = "foo" } = obj;
									vars.push({ name: left.name, kind });
									break;
								case "Identifier":
									vars.push({ name, kind });
									break;
							}
						});
						break;
					case "Identifier":
						vars.push({ name, kind });
						break;
				}
			});
		}
	});

	return vars;
}
