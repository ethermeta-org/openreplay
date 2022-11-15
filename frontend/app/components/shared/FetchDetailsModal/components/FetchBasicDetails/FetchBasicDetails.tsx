import React from 'react';
import { Icon } from 'UI';
import { formatBytes } from 'App/utils';
import CopyText from 'Shared/CopyText';
import { TYPES } from 'Types/session/resource';

interface Props {
  resource: any;
}
function FetchBasicDetails({ resource }: Props) {
  const _duration = parseInt(resource.duration);
  return (
    <div>
      <div className="flex items-center py-1">
        <div className="font-medium">Name</div>
        <div className="rounded-lg bg-active-blue px-2 py-1 ml-2 whitespace-nowrap overflow-hidden text-clip cursor-pointer">
          <CopyText content={resource.url}>{resource.name}</CopyText>
        </div>
      </div>

      <div className="flex items-center py-1">
        <div className="font-medium">Type</div>
        <div className="rounded bg-active-blue px-2 py-1 ml-2 whitespace-nowrap overflow-hidden text-clip">
          {resource.type}
        </div>
      </div>

      {!!resource.decodedBodySize && (
        <div className="flex items-center py-1">
          <div className="font-medium">Size</div>
          <div className="rounded bg-active-blue px-2 py-1 ml-2 whitespace-nowrap overflow-hidden text-clip">
            {formatBytes(resource.decodedBodySize)}
          </div>
        </div>
      )}

      {resource.method && (
        <div className="flex items-center py-1">
          <div className="font-medium">Request Method</div>
          <div className="rounded bg-active-blue px-2 py-1 ml-2 whitespace-nowrap overflow-hidden text-clip">
            {resource.method}
          </div>
        </div>
      )}

      {resource.status && (
        <div className="flex items-center py-1">
          <div className="font-medium">Status</div>
          <div className="rounded bg-active-blue px-2 py-1 ml-2 whitespace-nowrap overflow-hidden text-clip flex items-center">
            {resource.status === '200' && (
              <div className="w-4 h-4 bg-green rounded-full mr-2"></div>
            )}
            {resource.status}
          </div>
        </div>
      )}

      {!!_duration && (
        <div className="flex items-center py-1">
          <div className="font-medium">Time</div>
          <div className="rounded bg-active-blue px-2 py-1 ml-2 whitespace-nowrap overflow-hidden text-clip">
            {_duration} ms
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchBasicDetails;
