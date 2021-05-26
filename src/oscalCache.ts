import {
    Catalog, Component,
    Control, ControlBasedRequirement, ControlGroup, InformationType, InventoryItem,
    OrganizationSecurityPolicy, Party, PlanOfActionAndMilestones,
    Profile, Resource, Role, SecurityAssessmentPlan, SecurityAssessmentResults,
    SystemSecurityPlan, Capability, ComponentDefinition
} from "oscal"
import { IdentifiedRisk } from "oscal"
import sap from "oscal/src/schemas/oscal_assessment-plan_schema.json"
import sar from "oscal/src/schemas/oscal_assessment-results_schema.json"
import catalog from "oscal/src/schemas/oscal_catalog_schema.json"
import osp from "oscal/src/schemas/oscal_organization_security_policy.json"
import component_def from "oscal/src/schemas/oscal_component_schema.json"
import poam from "oscal/src/schemas/oscal_poam_schema.json"
import profile from "oscal/src/schemas/oscal_profile_schema.json"
import ssp from "oscal/src/schemas/oscal_ssp_schema.json"
import { composeStore, Store } from "store"
import { UseStore } from "zustand"


export type OscalCache = {
    ssp: UseStore<Store<SystemSecurityPlan>>
    information_type: UseStore<Store<InformationType>>
    osp: UseStore<Store<OrganizationSecurityPolicy>>
    poam: UseStore<Store<PlanOfActionAndMilestones>>
    sar: UseStore<Store<SecurityAssessmentResults>>
    sap: UseStore<Store<SecurityAssessmentPlan>>
    baseline_profile: UseStore<Store<Profile>>
    catalog: UseStore<Store<Catalog>>
    party: UseStore<Store<Party>>
    role: UseStore<Store<Role>>
    component: UseStore<Store<Component>>
    component_definition: UseStore<Store<ComponentDefinition>>
    capability: UseStore<Store<Capability>>
    risk: UseStore<Store<IdentifiedRisk>>
    resource: UseStore<Store<Resource>>
    inventory_item: UseStore<Store<InventoryItem>>
    control: UseStore<Store<Control>>
    control_group: UseStore<Store<ControlGroup>>
    implemented_requirement: UseStore<Store<ControlBasedRequirement>>
}

export type OscalCachedDefinition =
    "system_security_plan" |
    "organization_security_policy" |
    "plan_of_action_and_milestones" |
    "assessment_results" |
    "assessment_plan" |
    "profile" |
    "catalog" |
    "party" |
    "role" |
    "inventory_item" |
    "system_component" |
    "risk" |
    "resource" |
    "authorization_boundary" |
    "system_characteristics" |
    "authorization_boundary" |
    "data_flow" |
    "control" |
    "control_group" |
    "implemented_requirement"

/**
 *  Global cache hook for oscal data storage for use in react with hooks
 */
const oscal: OscalCache = {
    ssp: composeStore<SystemSecurityPlan>({
        schema: ssp, definition: "system_security_plan"
    }),
    information_type: composeStore<InformationType>({
        schema: ssp
        , definition: "information_type"
    }),
    osp: composeStore<OrganizationSecurityPolicy>({
        schema: osp, definition: "organization_security_policy"
    }),
    poam: composeStore<PlanOfActionAndMilestones>({
        schema: poam, definition: "plan_of_action_and_milestones"
    }),
    sar: composeStore<SecurityAssessmentResults>({
        schema: sar, definition: "assessment_results"
    }),
    sap: composeStore<SecurityAssessmentPlan>({
        schema: sap, definition: "assessment_plan"
    }),
    baseline_profile: composeStore<Profile>({
        schema: profile, definition: "profile"
    }),
    catalog: composeStore<Catalog>({
        schema: catalog, definition: "catalog"
    }),
    party: composeStore<Party>({
        schema: ssp, definition: "party"
    }),
    role: composeStore<Role>({
        schema: ssp, definition: "role"
    }),
    component: composeStore<Component>({
        schema: ssp, definition: "system_component"
    }),
    capability: composeStore<Capability>({
        schema: component_def, definition: "capability"
    }),
    component_definition: composeStore<ComponentDefinition>({
        schema: component_def, definition: "component_definition"
    }),
    risk: composeStore<IdentifiedRisk>({
        schema: poam, definition: "risk"
    }),
    resource: composeStore<Resource>({
        schema: ssp,
        definition: "resource",
    }),
    inventory_item: composeStore<InventoryItem>({
        schema: ssp, definition: "inventory_item"
    }),
    control: composeStore<Control>({
        schema: catalog, definition: "control"
    }),
    control_group: composeStore<ControlGroup>({
        schema: catalog, definition: "control_group"
    }),
    implemented_requirement: composeStore<ControlBasedRequirement>({
        schema: ssp, definition: "implemented_requirement"
    }),
};

export default oscal;

