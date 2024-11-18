"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

export function NavbarDemo() {
    return (
        (<div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>)
    );
}

function Navbar({
    className
}) {
    const [active, setActive] = useState(null);
    return (
        (<div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
            <Link to={"/"}><MenuItem setActive={setActive} active={null} item={"Home"}  /></Link>
            <Link to={"/"}><MenuItem setActive={setActive} active={null} item={"About"} /></Link>

                <MenuItem setActive={setActive} active={active} customItemCSS={"dark:text-yellow-100"} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/">Education</HoveredLink>
                        <HoveredLink href="/">Healthcare</HoveredLink>
                        <HoveredLink href="/">Official Retails</HoveredLink>
                        <HoveredLink href="/">Hospitality</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} customItemCSS={"dark:text-yellow-100"} item="Products">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                    <ProductItem
                            title="Alchurn"
                            href="/"
                            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                            description="Prepare for tech interviews like never before." />
                        <ProductItem
                            title="Tailit"
                            href="/"
                            src="https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg?auto=compress&cs=tinysrgb&w=600"
                            description="Production ready interior for your next big thing" />
                        <ProductItem
                            title="Moonbeam"
                            href="/"
                            src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600"
                            description="Never create from scratch again. Go from idea in minutes." />
                        <ProductItem
                            title="Rogue"
                            href="/"
                            src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using tech" />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} customItemCSS={"dark:text-yellow-100"} item="Pricing">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/individual">Individual</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
                        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>)
    );
}
