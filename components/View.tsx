import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/Write-client";
import { after } from "node:test";
import "server-only"

const View = async ({ id }: { id: string }) => {
  const view = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });
  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: view.views + 1 })
        .commit()
  );
  return (
    <div className="view-container">
      <div className=" absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">Views: {view.views}</span>
      </p>
    </div>
  );
};

export default View;
